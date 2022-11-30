const http = require('http');

const port = 4000;
//create a variable port to store the port number

const server = http.createServer((request,response)=>{
    //create an endpoint'to start the routing process
    if (request.url == '/greeting'){
        //url - it is a property that is refers to the url at the link to the browser
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('This is my Home page');
    }
    else if (request.url == '/homepage')
    {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end('Greeting Page');
    }
    else {
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.end('Page Unavailable');
    }
});

server.listen(port);
console.log(`Server is connected at localhost: ${port}`);

//how to access endpoint? http://localhost:4000/
