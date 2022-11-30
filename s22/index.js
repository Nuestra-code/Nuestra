console.log('connected');
// Step 1: NodeJS and Postman Installation
// it is recommended  to use LTS (Long Time Support) because the software release is maintained for extended period of time.

// Step 2: Create a require() function
// similar to <script><script/> tag
let http = require ('http');

//Step 3: use createServer() method
//we can creat HTTP server that listens to request on a specified port and gives back response for the client.
http.createServer(function (request, response) {
    // request - messages sent by the client
    // response - answer that was sent by the server
    // client (FE) and servers (NodeJS, expressJS application) communicate by exchanging individual messages.

    // Step 4: create a writeHead
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // writeHead() - sets the statuis code for the response  200 (which means success/ok)
    //set the content type as a plain text message

    response.end('Hello Joey');
    // response.end() - terminates the response process


}).listen(4000);//the server will be assigned to port via the method listen

//how to run the NodeJS file? - use nodemon index.js and nodemon index.js
//when we apply changes nodemon server will run