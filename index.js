const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let filename = "." + q.pathname + '.html';
    if (q.pathname == '/') filename = './index.html';
    try {
        const data = fs.readFileSync(filename);
        res.writeHead(200, { 'content-type': "text/html" });
        res.write(data);
        return res.end();
    }
    catch {
        const data = fs.readFileSync("404.html");
        res.writeHead(404, { 'content-type': "text/html" });
        res.write(data);
        return res.end();
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})