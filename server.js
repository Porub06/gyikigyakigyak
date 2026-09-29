const express = require('express');

const app = express();
const PORT = 3000;

// Middleware a JSON formátumú kérések fogadásához
app.use(express.json());

// Memóriabeli adatbázis (kezdeti adatok)
let diakok = [
  { id: 101, nev: "Kovács Péter", szak: "Szoftverfejlesztő" },
  { id: 102, nev: "Nagy Anna", szak: "Hálózatépítő" }
];

// 1. READ (GET): Összes diák lekérése
app.get('/api/diakok', (req, res) => {
  res.status(200).json(diakok);
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`A szerver fut: http://localhost:${PORT}`);
});

// 2. CREATE (POST): Új diák felvétele
app.post('/api/diakok', (req, res) => {
  const ujDiak = {
    id: diakok.length > 0 ? diakok[diakok.length - 1].id + 1 : 101,
    nev: req.body.nev,
    szak: req.body.szak
  };

  diakok.push(ujDiak);

  // 201 Created állapotkód küldése a válaszban
  res.status(201).json(ujDiak);
});
