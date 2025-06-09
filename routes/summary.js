const express = require('express');
const router = express.Router();
const generateInsights = require('../utils/analyzer');
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/sample_api_logs.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read log file' });
    }

    try {
      const logs = JSON.parse(data);
      const insights = generateInsights(logs);
      res.json(insights);
    } catch (parseError) {
      res.status(500).json({ message: 'Invalid JSON format in log file' });
    }
  });
});

module.exports = router;