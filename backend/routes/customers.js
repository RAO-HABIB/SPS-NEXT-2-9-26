const express = require('express');
const db = require('../database');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const table = 'customers';

/* ---------------- INTRO ---------------- */

// PUT intro (create if not exists, update otherwise)
router.put('/intro', authMiddleware, (req, res) => {
  const { eyebrow, title, highlight, description } = req.body;
  try {
    const exists = db.prepare('SELECT 1 FROM section_intros WHERE section = ?').get('customers');

    if (exists) {
      db.prepare(`
        UPDATE section_intros
        SET eyebrow = ?, title = ?, highlight = ?, description = ?
        WHERE section = 'customers'
      `).run(eyebrow, title, highlight, description);
    } else {
      db.prepare(`
        INSERT INTO section_intros (section, eyebrow, title, highlight, description)
        VALUES ('customers', ?, ?, ?, ?)
      `).run(eyebrow, title, highlight, description);
    }

    res.json({ message: 'Intro updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

/* ---------------- GET ALL (intro + items) ---------------- */

router.get('/', (req, res) => {
  try {
    const intro = db.prepare('SELECT * FROM section_intros WHERE section = ?').get('customers') || {};
    const items = db.prepare(`SELECT * FROM ${table} ORDER BY order_index ASC`).all();
    res.json({ intro, items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

/* ---------------- ITEMS CRUD ---------------- */

router.post('/items', authMiddleware, (req, res) => {
  const { name, src, order_index } = req.body;
  try {
    const info = db.prepare(`
      INSERT INTO ${table} (name, src, order_index)
      VALUES (?, ?, ?)
    `).run(name, src, order_index || 0);
    res.json({ id: info.lastInsertRowid, message: 'Created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/items/:id', authMiddleware, (req, res) => {
  const { name, src, order_index } = req.body;
  try {
    db.prepare(`
      UPDATE ${table}
      SET name = ?, src = ?, order_index = ?
      WHERE id = ?
    `).run(name, src, order_index || 0, req.params.id);
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