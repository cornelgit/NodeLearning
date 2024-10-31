const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
    //res.send("<p>home page</p>");
    res.sendFile("./views/index.html", { root: __dirname }); // by default it looks for an absolute path - pc path // can also use path module
});

app.get("/about", (req, res) => {
    //res.send("<p>about page</p>");
    res.sendFile("./views/about.html", { root: __dirname }); // by default it looks for an absolute path - pc path // can also use path module
});

// redirects - create another get handlers as starting place
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 page
