const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const isProd = process.env.NODE_ENV === 'production';

// ✅ Cross-domain cookie options (Vercel → Render)
const cookieOptions = {
  httpOnly: true,
  secure: isProd,                       // HTTPS only in production
  sameSite: isProd ? 'none' : 'lax',    // 'none' for cross-domain
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000,      // 7 days
};

// Setup Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  proxy: true,                        // ✅ trust Render proxy (HTTPS)
},
  function (accessToken, refreshToken, profile, cb) {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(profile.emails[0].value);

    if (user) {
      return cb(null, user);
    } else {
      const info = db.prepare(`
        INSERT INTO users (email, name, profile_picture)
        VALUES (?, ?, ?)
      `).run(profile.emails[0].value, profile.displayName, profile.photos[0].value);

      const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(info.lastInsertRowid);
      return cb(null, newUser);
    }
  }
));

// Start OAuth
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

// Callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: process.env.FRONTEND_URL + '/admin/login', session: false }),
  function (req, res) {
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email, role: req.user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    db.prepare('INSERT INTO sessions (user_id, token, expires_at) VALUES (?, ?, ?)').run(
      req.user.id, token, expiresAt.toISOString()
    );

    res.cookie('token', token, cookieOptions);
    res.redirect(process.env.FRONTEND_URL + '/admin/dashboard');
  }
);

// Logout
router.post('/logout', authMiddleware, (req, res) => {
  const token = req.cookies.token;

  if (token) {
    db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
  }

  // ✅ Same options must be passed to clearCookie
  res.clearCookie('token', {
    httpOnly: cookieOptions.httpOnly,
    secure: cookieOptions.secure,
    sameSite: cookieOptions.sameSite,
    path: cookieOptions.path,
  });
  res.json({ message: 'Logged out successfully' });
});

// Current user
router.get('/me', authMiddleware, (req, res) => {
  const user = db.prepare('SELECT id, email, name, profile_picture, role FROM users WHERE id = ?').get(req.user.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({ user });
});

module.exports = router;