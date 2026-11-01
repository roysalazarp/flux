const http = require('http');

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || 'development';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(PORT, () => {
  console.log(`[${APP_ENV}] Server running at http://localhost:${PORT}/`);
});
