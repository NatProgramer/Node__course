const http = require('http');

http.createServer((request, response) => {
	console.log(request);
	response.write('<h1>Hello worl<h1>');
	response.end();
}).listen(3000);

console.log('server escucha el puerto 3000');
