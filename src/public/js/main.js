//cliente conectado al servidor
$(function () {

  const socket = io();

const $messageForm = $('#message-form');
const $mesageBox = $('#message');
const $chat = $('#chat');

//Obtener el dom desde el nickname form
const $nickForm = $('#nickForm');
const $nickname = $('#nickname');
const $nickError = $('#nickError');

const $users = $('#usernames');

//Evento
$nickForm.submit(e => {
  e.preventDefault();
  socket.emit('nuevo usuario', $nickname.val(), data => {
    if (data) {
      $('#nickWrap').hide();
      $('#contenWrap').show();

    } else {
      $nickError.html('<div class="alert alert-danger"> Ese usuario ya existe</div>');
    }
    $nickname.val('');
  });

});

//Eventos
$messageForm.submit( e => {
  e.preventDefault();
  socket.emit('enviar mensaje', $mesageBox.val());
  $mesageBox.val('');
});

//Escuchar el evento desde el servidor
socket.on('Nuevo mensaje', function(data) {
  $chat.append('<b>' +  data.nick + '</b>: ' + data.msg + '<br/>')
});

socket.on('usernames', data => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    html += `<p><i class ="fas fa-user "></i>${data[i]}</p>`
  }
  $users.html(html);
});
})
