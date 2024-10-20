const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    // set header content type
    response.setHeader("Content-Type", "text/html"); // first set header  type can vary: 'text/plain' or 'text/html' for example
    response.write("<head><link rel='stylesheet' href='#'><head>"); // write the response to be sent back to browser
    response.write("<p>Hi there. This is a response.<p>"); // write the response to be sent back to browser
    response.write("<p>Hello again.<p>"); // write the response to be sent back to browser
    response.end(); // end the response and send back
});

// Need to listen on a port #
// localhost is the default argument
// the callback function fires when we start listening
server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000...");
});
