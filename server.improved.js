const http = require("http"),
    fs = require("fs"),
    // IMPORTANT: you must run `npm install` in the directory for this assignment
    // to install the mime library if you"re testing this on your local machine.
    // However, Glitch will install it automatically by looking in your package.json
    // file.
    mime = require("mime"),
    dir = "public/",
    port = 3000;

const messages = [
    {message: "Hello world!", from: "Server", fromStyle: '#000', sentAt: Date.now()},
];

const server = http.createServer(function (request, response) {
    if (request.method === "GET" && request.url === "/") {
        sendFile(response, "public/index.html");
    } else if (request.url === "/messages") {
        handleMessages(request, response);
    } else {
        sendFile(response, dir + request.url.slice(1));
    }
});

const handleMessages = (request, response) => {
    response.writeHead(200, "OK", {"Content-Type": "application/json"});

    if (request.method === "GET") {
        response.end(JSON.stringify(messages));
    } else if (request.method === "POST") {
        let dataString = "";

        request.on("data", function (data) {
            dataString += data;
        });

        request.on("end", function () {
            const message = JSON.parse(dataString);

            // Set color to a hsl color, using the first character of the user's name.
            // 97 is the ASCII for lowercase 'a', the * 8 just makes the colors vary more.
            message.fromStyle = `hsl(${(message.from.charCodeAt(0) - 97) * 8}, 50%, 50%)`;

            messages.push(message);

            response.end(JSON.stringify(messages));
        });
    }
}

const sendFile = function (response, filename) {
    const type = mime.getType(filename);

    fs.readFile(filename, function (err, content) {

        // if the error = null, then we"ve loaded the file successfully
        if (err === null) {

            // status code: https://httpstatuses.com
            response.writeHeader(200, {"Content-Type": type});
            response.end(content);
        } else {

            // file not found, error code 404
            response.writeHeader(404);
            response.end("404 Error: File Not Found");
        }
    });
}

server.listen(process.env.PORT || port);
