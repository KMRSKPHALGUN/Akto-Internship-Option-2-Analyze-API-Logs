const express = require('express');
const summaryRoute = require('./routes/summary');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use('/summary', summaryRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});