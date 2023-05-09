const express = require('express');
const app = express();

app.use(express.static('public', {
  extensions: ['html', 'htm', 'js', 'jsx']
}));

const port = 3000;

app.listen(port, () => {
  console.log(`Serveren kjører på http://localhost:${port}`);
});
