const express = require('express');
const Parser = require('./dist/mercury');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const { url, format } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing ?url=' });
  }

  try {
    const result = await Parser.parse(url, {
      contentType: format || 'html',
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Mercury Parser listening on port ${PORT}`);
});
