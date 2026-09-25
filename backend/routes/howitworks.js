const express = require('express');
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const table = 'howitworks';
const sectionName = 'howitworks';

router.get('/', (req, res) => {
  try {
    const intro = db.prepare(`SELECT * FROM section_intros WHERE section = ?`).get(sectionName);
    const items = db.prepare(`SELECT * FROM ${table} ORDER BY order_index ASC`).all();
    res.json({ intro, items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/intro', authMiddleware, (req, res) => {
  const {
    eyebrow, title, highlight, description,
    stat_value, stat_suffix, stat_label,
    stat2_value, stat2_suffix, stat2_label,
    image, cta_label, cta_href
  } = req.body;
  try {
    db.prepare(`
      UPDATE section_intros
      SET eyebrow = ?, title = ?, highlight = ?, description = ?,
          stat_value = ?, stat_suffix = ?, stat_label = ?,
          stat2_value = ?, stat2_suffix = ?, stat2_label = ?,
          image = ?, cta_label = ?, cta_href = ?
      WHERE section = ?
    `).run(
      eyebrow, title, highlight, description,
      stat_value, stat_suffix, stat_label,
      stat2_value, stat2_suffix, stat2_label,
      image, cta_label, cta_href,
      sectionName
    );
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/items', authMiddleware, (req, res) => {
  const { number, icon, title, description, image, order_index } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO ${table} (number, icon, title, description, image, order_index)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(number, icon, title, description, image, order_index || 0);
    res.json({ id: info.lastInsertRowid, message: 'Created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/items/:id', authMiddleware, (req, res) => {
  const { number, icon, title, description, image, order_index } = req.body;
  try {
    db.prepare(`
      UPDATE ${table}
      SET number = ?, icon = ?, title = ?, description = ?, image = ?, order_index = ?
      WHERE id = ?
    `).run(number, icon, title, description, image, order_index || 0, req.params.id);
    res.json({ message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.delete('/items/:id', authMiddleware, (req, res) => {
  try {
    db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;