const net = require('net');

const server = net.createServer(socket => {
    socket.on('error', console.log);

	socket.write(
        'HTTP/1.1 200 OK\r\n' +
        'Content-Type: text/html\r\n' +
        'content-security-policy-report-only: broken header/te\x08t\r\n' +
        'Content-Length: 6\r\n' +
        '\r\n' +
        'hello!' +
        '\r\n');
	socket.pipe(socket);
});

server.listen(1337);

module.exports = { server };
