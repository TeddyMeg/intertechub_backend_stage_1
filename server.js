const express = require('express');
const dontenv = require('dotenv');
// path package is used to join and create a url
const path = require('path');
const app = express();
dontenv.config();
const port = process.env.PORT || 3000;

//This is used to get the routes
app.use('/',require('./routes/routes'))

// Root route serves HTML Page displayed to the user under public folder and index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
