const express = require('express');
const path = require('path');
const app = express();

//middlewares
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Temp/index.html'));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
