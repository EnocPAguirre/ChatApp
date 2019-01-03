
module.exports = function(io) {

io.on('connection', socket => {
  console.log('Un nuevo usuario conectado ');


  socket.on('enviar mensaje', function (data) {
    io.sockets.emit('Nuevo mensaje', data);
  });
});

}
