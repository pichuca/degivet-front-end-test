/**
 * server.js
 */

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5200;
const app = express();

app.use(favicon(__dirname + '/dist/angular-client/favicon.ico'));
// The __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist/angular-client')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/angular-client', 'index.html'));
});

// Listen.
app.listen(port);
console.log(`App listening at port: ${port}`);