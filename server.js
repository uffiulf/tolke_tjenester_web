const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Velkommen til tolketjenesten!');
});

app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
