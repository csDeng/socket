"use strict";
const ws = require('nodejs-websocket')

const server = ws.createServer(function(con){
    console.log("new connection")
    

    // 收到前端发来的消息
    con.on('text', str=>{
        console.log('receiving \r\n', str)
        con.sendText('收到'+str+'!!!!')
        // console.log(server.connections)
    })
    setInterval(()=>{
        // 给前端发送消息
       send()
    },3000)

    // 监听所有的ws断开
    con.on('close', (code,reason)=>{
        console.log('connection is closed\r\n',code, reason)
    })
    con.on("error",e=>{
        console.log("error=\r\n",e)
    })
})

/**
 * 利用自定义的方法，
 * 对server的所有链接遍历广播消息，避免单一链接断开后，
 * 服务端继续发消息，造成4077持续错误
 */
function send(){
    // server.connections  是当前已连接的所有前端服务
    server.connections.forEach(connection=>{
        connection.sendText('hahah')
    })
}
// 启动服务
server.listen(3000,()=>{
    console.info('ws is running at:\r\n ws://127.0.0.1:3000')
})