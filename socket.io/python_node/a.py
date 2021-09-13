import socketio

# standard Python
sio = socketio.Client()

sio.connect('http://localhost:3000')

# 监听message事件
@sio.on('message')
def on_message(data):
    print('I received a message!',data)

# 事件派发
sio.emit('python-message','hello from py')
print('the end')