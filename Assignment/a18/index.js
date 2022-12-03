const http = require ('http');
const PORT = 4000;

let directory = [
    {
        course: "Web Development"
    }
];

http.createServer( (req, res) => {
    
    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to Booking System!');
    }

   if (req.url == '/profile' && req.method == 'GET') {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end("Welcome to my Profile!");
    }
    if (req.url == '/courses' && req.method == 'GET') {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(directory));
        res.end("Here are our available courses!");
    }

    if (req.url == '/courses' && req.method == 'POST') {
        let reqBody = "";

    req.on("data", (data) => {
        reqBody += data});

    req.on("end", () => {
        reqBody = JSON.parse(reqBody);

        directory.push(reqBody);

        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify(directory));
        res.end("Add a course to our resources");
    });
    }

}).listen(PORT);
console.log(`Server is connected at localhost: ${PORT}`);