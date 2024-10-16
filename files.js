// core module needed
const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
    // this is async
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// console.log("last line");

// writing files
fs.writeFile("./docs/outFile.txt", "Hello World!", () => {
    // this is async
    console.log("File was written.");
});

// directories
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        // this is async
        if (err) {
            console.log(err);
        }
        console.log("Folder created!");
    });
} else {
    // remove folder instead
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted!");
    });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted!");
    }); // remove a file
}
