const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client is connected');
  socket.on('end', () => {
    console.log('Client is disconnected');
  });

  socket.write('Server: Hi client!');
  socket.pipe(socket);
});

server.on('error', (err) => {
  throw err;
});

server.listen(8124, '127.0.0.1', () => {
  console.log(`Server is listening on 127.0.0.1:8124`);
});
