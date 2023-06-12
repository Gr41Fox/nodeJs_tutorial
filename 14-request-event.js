const http = require('http')

//const server = http.createServer((req, res) => {
   //res.end('Welcome')
//})

//USING EVENT EMITTER API
const server = http.createServer()
// EMITS REQUEST EVENT
// SUBSCRIBE TO IT / LISTEN FOR IT / RESPOND TO IT
server.on('request',(req,res)=>{
   res.end('Welcome')
})

server.listen(5003)