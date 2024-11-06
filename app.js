const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// use morgan middleware & static file (css, images, etc)
app.use(express.static("public"));
app.use(morgan("dev")); // can use others like tiny or dev

// NOTE: after express run this function, it doesn't know what to do next or how to move on to next line
// which makes browser hang while waiting
// app.use((req, res, next) => {
//     console.log("New Request Made:");
//     console.log("Host:", req.hostname);
//     console.log("Path:", req.path);
//     console.log("Method:", req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("In the next middleware");
//     next();
// });

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

// this fires for every type of request (including post) top to bottom until we send a reponse or close program/browser- should be at the bottom
// 404 page - use use() method - to fire middleware - top down this is the last match in thie file
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname }); //we have to manually set a 4404 error, the html filename isn't a way to tell express
});
