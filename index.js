const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname+'.html';
    fs.readFile(filename, (err, data) => {
        if(err){
            
        }
        res.writeHead(200, {'content-type' : "text/html"});
        res.write(data);
        return res.end(data);
    });
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})  

// the code redirect users to about and contact-me pages successfully
