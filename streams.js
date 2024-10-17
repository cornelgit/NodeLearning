const fs = require("fs");

// read and write streams
const readStream = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blogTemp.txt", {
    encoding: "utf8",
});

// // .on is an event listener - listen to a data event
// readStream.on("data", (chunk) => {
//     console.log("---------NEW CHUNK---------");
//     console.log(chunk); // .toString also works if no enconding is specified
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// });

// we can use PIPING - from a readable to a writeable stream - does the same above but less code
readStream.pipe(writeStream);
