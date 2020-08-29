const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = process.env.Port || 5000;

server.listen(port, () => {
    console.log("Server is Running on port : " + port);
});



