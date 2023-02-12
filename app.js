const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    return res.render("index");
})

app.get("/about", (req, res) => {
    return res.render("about");

})
app.get("/contact-me", (req, res) => {
    return res.render("contact-me");

})
app.get('*', function(req, res){
    return res.render("404");
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})