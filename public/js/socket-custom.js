var socket = io();
socket.on('connect', function() {
    console.log('Conexion establecida con el servidor');
});

socket.on('disconnect', function() {
    console.log('Conexion perdida con el servidor');
});

//Enviando data
socket.emit('enviarMensaje', {
    usuario: 'Juan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

//Escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});