const express = require('express');
const path = require("path")

const app = express();
const { PORT = 3000 } = process.env

app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
