const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const favPath = path.join(__dirname, '../data/favorites.json');

// Get all favorites
router.get('/', async (req, res) => {
  try {
    const data = await fs.readFile(favPath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.json([]);
  }
});

// Add a favorite
router.post('/', async (req, res) => {
  try {
    const favs = JSON.parse(await fs.readFile(favPath, 'utf-8'));
    favs.push(req.body);
    await fs.writeFile(favPath, JSON.stringify(favs, null, 2));
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

// Remove a favorite
router.delete('/:id', async (req, res) => {
  try {
    let favs = JSON.parse(await fs.readFile(favPath, 'utf-8'));
    favs = favs.filter(f => f.id !== req.params.id);
    await fs.writeFile(favPath, JSON.stringify(favs, null, 2));
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

module.exports = router;
