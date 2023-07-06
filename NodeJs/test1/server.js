// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.json());
// app.use(express.urlencoded({extended:true}));

// app.get("/", helloServer);

// function helloServer(req, res) {
//   res.sendFile(__dirname + "/index.html");

//   // res.send('hi abd')
// }

// app.post("/postText", sendData);

// function sendData(req, res) {
//   let data = req.body.text;
//   // text is name of input
//   console.log(data);
// }


// app.listen(3007, function () {
//     console.log("Server is ");
// });

// const info = require("./info")
// let firstName = "abs";
// let lastName = "qqq";

// console.log(info);



const http = require('http')

const hostname = '127.0.0.1'
const port = 8080;

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('test 12345667\n')
})


server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})
