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
    // setInterval(()=>{
    //     console.log('开始发信息')
    //     client.emit('msg',"我是服务端发来的数据")
    // }, 10000)
    
});
server.listen(3000);

/**
 * @todo
 * 因为使用小程序 socket.io 4监听不到所以回退到2
 */