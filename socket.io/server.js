const server = require('http').createServer();
const io = require('socket.io')(server, { cors: true });

io.on('connection', client => {
    console.log("有人链接了\r\n")

    // client.on 监听客户端emit事件
    client.on('event', data => {
        console.log('event\r\n', data)
    });
    client.on('disconnect', () => {
        console.log('client is disconnected\r\n')
    });
    client.on('hello',(data)=>{
        console.log("hello事件被触发，收到数据",data)
    })
    client.on('text',(data)=>{
        console.log('text事件被触发',data)
    })
    setInterval(()=>{
        client.emit('msg',"我是服务端发来的数据")
    }, 3000)
    
});
server.listen(3000);