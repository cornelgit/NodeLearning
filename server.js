const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    // // set header content type
    // response.setHeader("Content-Type", "text/html"); // first set header  type can vary: 'text/plain' or 'text/html' for example
    // response.write("<head><link rel='stylesheet' href='#'><head>"); // write the response to be sent back to browser
    // response.write("<p>Hi there. This is a response.<p>"); // write the response to be sent back to browser
    // response.write("<p>Hello again.<p>"); // write the response to be sent back to browser
    // response.end(); // end the response and send back

    // set header content type
    response.setHeader("Content-Type", "text/html");

    // determine view to send back based on requested url
    let path = "./views/";
    switch (request.url) {
        case "/":
            path += "index.html";
            response.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            response.statusCode = 200;
            break;
        case "/about-me":
            response.statusCode = 301;
            break;
        default:
            path += "404.html";
            response.statusCode = 404;
            break;
    }

    // send an HTML file
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        } else {
            //response.write(data); // we technically don't need this if used only once
            response.end(data); // pass it here instead, same functionality for 1 writable item
        }
    });
});

// Need to listen on a port #
// localhost is the default argument
// the callback function fires when we start listening
server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000...");
});
