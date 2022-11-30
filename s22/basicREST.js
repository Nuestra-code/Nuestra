const http = require ('http');
const PORT = 4000;

http.createServer( (request, response) => {
    console.log("Hello");

    if (request.url == '/profile' && request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to my page!');
    }
    else if (request.url == '/profile' && request.method == 'POST') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Data to be sent to the database');
    }
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end('Request Cannot Be Completed');
    }
    
}).listen(PORT);

console.log(`Server is connected at localhost: ${PORT}`);
