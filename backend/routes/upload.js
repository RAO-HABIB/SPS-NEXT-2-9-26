// backend/routes/upload.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Env-based upload dir (Render disk pe point karega)
const uploadDir = process.env.UPLOAD_DIR || path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Allowed file types
const ALLOWED_EXT = /\.(jpe?g|png|gif|webp|avif|svg|bmp|mp4|webm|ogg|mov|m4v)$/i;

const ALLOWED_MIME = new Set([
  'image/jpeg', 'image/png', 'image/gif', 'image/webp',
  'image/avif', 'image/svg+xml', 'image/bmp',
  'video/mp4', 'video/webm', 'video/ogg',
  'video/quicktime', 'video/x-m4v',
  'application/octet-stream',
]);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, uuidv4() + ext);
  },
});

const fileFilter = function (req, file, cb) {
  const extOk = ALLOWED_EXT.test(path.extname(file.originalname).toLowerCase());
  const mimeOk = ALLOWED_MIME.has(file.mimetype);

  if (extOk || mimeOk) {
    return cb(null, true);
  }
  cb(new Error(`Only images and videos are allowed (got ${file.mimetype} / ${file.originalname})`));
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB
  fileFilter: fileFilter,
});

router.post('/', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const fileUrl = `/uploads/${req.file.filename}`;

  res.json({
    url: fileUrl,
    filename: req.file.filename,
    mimetype: req.file.mimetype,
    size: req.file.size,
    kind: req.file.mimetype.startsWith('video/')
      ? 'video'
      : req.file.mimetype === 'image/avif'
        ? 'avif'
        : 'image',
  });
});

// Multer error handler
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large (max 100 MB)' });
    }
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

module.exports = router;