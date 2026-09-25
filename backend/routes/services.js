const express = require('express');
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const table = 'services';

router.get('/', (req, res) => {
  try {
    const items = db.prepare(`SELECT * FROM ${table} ORDER BY order_index ASC`).all();
    // Parse slides JSON
    const parsedItems = items.map(item => ({...item, slides: JSON.parse(item.slides || '[]')}));
    res.json({ intro: null, items: parsedItems });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/items', authMiddleware, (req, res) => {
  const { tab_name, tab_description, slides, order_index } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO ${table} (tab_name, tab_description, slides, order_index)
      VALUES (?, ?, ?, ?)
    `).run(tab_name, tab_description, typeof slides === 'string' ? slides : JSON.stringify(slides || []), order_index || 0);
    res.json({ id: info.lastInsertRowid, message: 'Created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/items/:id', authMiddleware, (req, res) => {
  const { tab_name, tab_description, slides, order_index } = req.body;
  try {
    db.prepare(`
      UPDATE ${table} 
      SET tab_name = ?, tab_description = ?, slides = ?, order_index = ? 
      WHERE id = ?
    `).run(tab_name, tab_description, typeof slides === 'string' ? slides : JSON.stringify(slides || []), order_index || 0, req.params.id);
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
