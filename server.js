const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware om formulierdata te lezen
app.use(express.urlencoded({ extended: true }));

// Loginpagina tonen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Login verwerken (simpele controle)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Tijdelijke, vaste gebruikersnaam en wachtwoord
  if (username === 'admin' && password === 'geheim123') {
    res.send('✅ Welkom Fabrikant!');
  } else {
    res.send('❌ Verkeerde gebruikersnaam of wachtwoord.');
  }
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
