const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    if(msg == "bonjour comment ça va ?"){
      io.emit('chat message', msg.toUpperCase());
      io.emit('chat message', "TRES BIEN MERCI");
    } else {
      io.emit('chat message', msg.toUpperCase());
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});