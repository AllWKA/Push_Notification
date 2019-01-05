module.exports = app => {
    let http = require('http').Server(app);
    let io = require('socket.io')(http);

    io.on('connection', (socket) => {

        socket.on('disconnect', function () {
            io.emit('users-changed', { user: socket.nickname, event: 'left' });
        });

        socket.on('add-notification', (message) => {
            io.emit('notification', { text: message.text, from: socket.nickname, created: new Date() });
        });
    });
}