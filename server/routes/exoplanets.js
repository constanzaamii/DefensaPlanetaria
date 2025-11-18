const router = require('express').Router();
const planets = require('../data/exoplanets.json');

// Get all planets with optional filters
router.get('/', (req, res) => {
  let filtered = planets;
  if (req.query.type) filtered = filtered.filter(p => p.type === req.query.type);
  if (req.query.habitable) filtered = filtered.filter(p => p.habitable);
  res.json(filtered);
});

// Get planet by ID
router.get('/:id', (req, res) => {
  const planet = planets.find(p => p.id === req.params.id);
  planet ? res.json(planet) : res.status(404).json({ error: 'Not found' });
});

// Search planets by name or star
router.get('/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = planets.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.star.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
