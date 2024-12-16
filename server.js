const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<p>Sebastian Perez</p><p>Cristian San</p><p>Ramiro Reynoso</p><p>Jonathan Gomez</p><p>Matías Lorenzo</p><p>Daniel Rama</p><p>Guille Schettino</p><p>Lujan Tissera</p><p>Marcela Wojtasik</p><p>Sergio Bugallo</p><p>Nicolas Franzese</p><p>Carlos Sivori</p><p>Hernan Ledesma</p><p>Florencia Marcazzo</p><p>Agustin Salum</p><p>Gise Urriza</p><p>Nahuel Ruiz Mattar</p><p>Gabriela Espinoza</p><p>leonel crespo</p><p>Maxi Garcia Solorzano</p>');
});

//TEST LUJAN
app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});
