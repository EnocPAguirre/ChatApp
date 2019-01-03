//cliente conectado al servidor
$(function () {

  const socket = io();

const $messageForm = $('#message-form');
const $mesageBox = $('#message');
const $chat = $('#chat');

//Eventos
$messageForm.submit( e => {
  e.preventDefault();
  socket.emit('enviar mensaje', $mesageBox.val());
  $mesageBox.val('');
});

//Escuchar el evento desde el servidor
socket.on('Nuevo mensaje', function(data) {
  $chat.append(data + '</br>')
});
})
