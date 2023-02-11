const express = require("express");
const fs = require("fs")
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    const data = fs.readFileSync("./index.html");
    res.writeHead(200, { 'content-type': "text/html" });
    res.write(data);
    return res.end();
})

app.get("/about", (req, res) => {
    const data = fs.readFileSync("./about.html");
    res.writeHead(200, { 'content-type': "text/html" });
    res.write(data);
    return res.end();
})
app.get("/contact-me", (req, res) => {
    const data = fs.readFileSync("./contact-me.html");
    res.writeHead(200, { 'content-type': "text/html" });
    res.write(data);
    return res.end();
})
app.get('*', function(req, res){
    const data = fs.readFileSync("./404.html");
    res.writeHead(200, { 'content-type': "text/html" });
    res.write(data);
    return res.end();
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})