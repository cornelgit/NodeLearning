const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request);
});

// Need to listen on a port #
// localhost is the default argument
// the callback function fires when we start listening
server.listen(3000, "localhost", () => {
    console.log("Listening for requests on port 3000...");
});
