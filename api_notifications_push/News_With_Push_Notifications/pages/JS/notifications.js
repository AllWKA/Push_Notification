var socket = io('http://localhost/');

console.log("hola?");

socket.on('connect', function () {
  socket.send('user connected');

  // socket.on('message', function (msg) {
  //   // my msg
  // });
});