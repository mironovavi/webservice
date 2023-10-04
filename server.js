const http = require('http');

const express = require('express');

// const hostname = '127.0.0.1';//ip-адрес нашего локального окружения
const hostname = 'localhost';
const port = 3000;//порт

//app is created with simple node.js

// const server = http.createServer((request, response) => {

//     response.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     });

//     // response.statusCode = 200;
//     // response.setHeader('Content-Type', 'text-plain');//тип контента
//     // response.end('Hello World!');//сам контент

// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

// localhost = 127.0.0.1;

//app is created with express framework

const app = express();

app.get("/", function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.sendFile(__dirname + "/sales.html");
})

app.listen(port);

console.log(`Server running at http://${hostname}:${port}"`);