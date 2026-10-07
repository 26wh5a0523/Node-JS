const os = require('os');
const path = require('path');
const http = require('http');
const EventEmitter = require('events');

console.log("platform:", os.platform());
console.log("Free memory:", os.freemem());
console.log("File Name:", path.basename(__filename));

const welcome = new EventEmitter();

welcome.on('welcome', () => {
    console.log("Welcome Event Triggered");
});

welcome.emit('welcome');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Node.js HTTP Server');
});

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});