/**
 * server.js
 */

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5200;
const app = express();

// TODO: add dist version directory url.

app.use(favicon(__dirname + '/favicon.ico')); // TODO: set correct path
// The __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist/'))); // TODO: set correct path

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/', 'index.html')); // TODO: set correct path
});

// Listen.
app.listen(port);
console.log(`App listening at port: ${port}`);