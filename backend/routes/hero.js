const express = require('express');
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const intro = db.prepare(`SELECT * FROM hero_intro WHERE id = 1`).get();
    const items = db.prepare(`SELECT * FROM hero_slides ORDER BY order_index ASC`).all();
    res.json({ intro, items });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/intro', authMiddleware, (req, res) => {
  const { eyebrow, title, highlight, description, primary_cta_label, primary_cta_href, secondary_cta_label, secondary_cta_href } = req.body;
  try {
    db.prepare(`
      UPDATE hero_intro 
      SET eyebrow = ?, title = ?, highlight = ?, description = ?, primary_cta_label = ?, primary_cta_href = ?, secondary_cta_label = ?, secondary_cta_href = ?
      WHERE id = 1
    `).run(eyebrow, title, highlight, description, primary_cta_label, primary_cta_href, secondary_cta_label, secondary_cta_href);
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/items', authMiddleware, (req, res) => {
  const { category_label, title, highlight, description, background_image, order_index } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO hero_slides (category_label, title, highlight, description, background_image, order_index)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(category_label, title, highlight, description, background_image, order_index || 0);
    res.json({ id: info.lastInsertRowid, message: 'Created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/items/:id', authMiddleware, (req, res) => {
  const { category_label, title, highlight, description, background_image, order_index } = req.body;
  try {
    db.prepare(`
      UPDATE hero_slides 
      SET category_label = ?, title = ?, highlight = ?, description = ?, background_image = ?, order_index = ? 
      WHERE id = ?
    `).run(category_label, title, highlight, description, background_image, order_index || 0, req.params.id);
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.delete('/items/:id', authMiddleware, (req, res) => {
  try {
    db.prepare(`DELETE FROM hero_slides WHERE id = ?`).run(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
