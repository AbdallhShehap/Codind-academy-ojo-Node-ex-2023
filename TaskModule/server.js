
const http = require('http')

const hostname = '127.0.0.1'
const port = 8090;

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');

    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Welcome to the Users endpoint.')
})


server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})




const fs = require("fs");
// fs.readFile("text.txt",  (err, data ) => {
//     if (err) {
//         console.error(err);
//     return;
//     }
//     console.log(`file contents: ${data}`)
// })

fs.promises.appendFile("exampl.txt",  'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })