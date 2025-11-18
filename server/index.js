const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/exoplanets', require('./routes/exoplanets'));
app.use('/api/favorites', require('./routes/favorites'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server on ${PORT}`));
