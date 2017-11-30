// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');

// our express app
const app = express();

const baseUrl = process.env.BASE_URL || '/';

// Point static path to dist
app.use(baseUrl, express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get(baseUrl + '*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express
const port = process.env.PORT || '4200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => {
  console.log(`server started on port ${port} (baseUrl is '${baseUrl}')`);
});
