const http = require('http');
const PORT = 3000;

const server = http.createServer ((req,res) => {
    if (req.url == '/login') {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end('You are in the Login Page!');
    }
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end('This page is unavailable.');
    }
});

server.listen(PORT);
console.log(`Server is connected at localhost: ${PORT}`);