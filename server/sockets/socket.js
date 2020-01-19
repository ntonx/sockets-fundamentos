const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado en explorador');
    //Enviando información al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Escuchando información del cliente
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchando información del cliente con valor de 'enviarMensaje'
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //se recibe los datos del cliente y se retransmiten a los otros clientes
        client.broadcast.emit('enviarMensaje', data);
        //     callback();

        /*      if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!!!!!'
            });
        }
*/
    });

});