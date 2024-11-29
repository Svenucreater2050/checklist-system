const express = require('express');
const fetchData = require('./src/fetchData');
const evaluateRules = require('./src/app');

const app = express();
const PORT = 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files
app.use(express.static('public'));

// Route
app.get('/', async (req, res) => {
  try {
    const data = await fetchData();
    const results = evaluateRules(data);
    res.render('index', { results });
  } catch (error) {
    res.status(500).send('Error fetching data. Please try again later.');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
