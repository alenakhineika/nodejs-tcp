const net = require('net');

const client = new net.Socket();

client.connect(8124, '127.0.0.1', () => {
  console.log('Client is connected');
  client.write('Client: Hi server!');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('Client is disconnected');
});
