const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();

const server = http.createServer(app);

const io = socketio.listen(server);

//Settings
app.set('port', process.env.PORT || 3000);

require('./sockets')(io);

//Enviando archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Empezando el servidor
server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
