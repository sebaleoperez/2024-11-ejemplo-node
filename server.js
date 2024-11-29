const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<p>Sebastian Perez</p><p>Pepe mujica</p><p>Cristian San</p><p>Ramiro Reynoso</p><p>Jonathan Gomez</p><p>Guille Schettino</p><p>Lujan Tissegitra</p><p>leonel crespo</p><p>leonel crespo</p>');
});

//TEST LUJAN
app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});
