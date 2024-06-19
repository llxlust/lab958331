let http = require('http')
let dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

if(!PORT){
    process.exit(1)
}

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello World')
}).listen(PORT)

