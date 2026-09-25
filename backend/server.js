require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Render/Railway reverse proxy ke liye ZAROORI
// Iske bina req.protocol = 'http' dikhta hai even on HTTPS,
// jiski wajah se secure cookies send nahi hote.
app.set('trust proxy', 1);

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS — cross-origin cookies support
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// ✅ Uploads static path — env-based (Render disk ke liye)
const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(__dirname, 'uploads');
app.use('/uploads', express.static(UPLOAD_DIR));

// Import routes
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/upload');
const heroRoutes = require('./routes/hero');
const servicesRoutes = require('./routes/services');
const startupsRoutes = require('./routes/startups');
const productsRoutes = require('./routes/products');
const howitworksRoutes = require('./routes/howitworks');
const partnersRoutes = require('./routes/partners');
const newsinsightsRoutes = require('./routes/newsinsights');
const customersRoutes = require('./routes/customers');
const verticalsRoutes = require('./routes/verticals');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/startups', startupsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/howitworks', howitworksRoutes);
app.use('/api/partners', partnersRoutes);
app.use('/api/newsinsights', newsinsightsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/verticals', verticalsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});