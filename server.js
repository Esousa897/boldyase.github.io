const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server draait! 🚀');
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
