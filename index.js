const http = require("http");
const port = process.env.PORT || 3000;


const handler = (req, res) => {

console.log ("server request recieved");

res.end('HELLO WORLD!');

}

const server = http.createServer(handler);

server.listen(port, err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('server is listening on port:' + port);
    }
});