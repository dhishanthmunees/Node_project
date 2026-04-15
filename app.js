const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from DevOps Pipeline. I am Learning it");
});

server.listen(4000);
