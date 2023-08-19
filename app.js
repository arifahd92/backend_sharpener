const http = require("http");

const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // Based on the URL, send different responses
    if (req.url === "/home") {
        res.end("Welcome home");
    } else if (req.url === "/about") {
        res.end("Welcome to About Us page");
    } else if (req.url === "/node") {
        res.end("Welcome to my Node.js project");
    } else {
        res.end("<h1>error page</h1>")
    }
});

server.listen(5000, () => {
    console.log("Server is listening at port 5000");
});
