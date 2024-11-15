const express = require('express')
const router = express.Router()

// Route: /name
app.get('/name', (req, res) => {
    res.status(200).send('Teddy Tassew');
  });
  
  // Route: /hobby
  app.get('/hobby', (req, res) => {
    res.status(200).json({
      hobby: 'Programming',
      details: 'Creating software and solving problems through code'
    });
  });
  
  // Route: /dream
  app.get('/dream', (req, res) => {
    res.status(200).send('To become a world-class software engineer and make a positive impact through technology');
  });

module.exports = router