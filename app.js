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

// this fires for every request up to here - must be at the bottom
// 404 page - use use() method - to fire middleware - top down this is the last match in thie file
app.use((req, res) => {
    res.statusCode(404).sendFile("./views/404.html", { root: __dirname }); //we have to manually set a 4404 error, the html filename isn't a way to tell express
});
