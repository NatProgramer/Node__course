const http = require('http');

const server = http.createServer((request, response) => {
	console.log(request.url);

	if (request.url == '/') {
		response.write('<h1>Bienvenido a mi server</h1>');
		return response.end();
	} else if (request.url === '/about') {
		response.write('<h1>Acerca de:</h1>');
		return response.end();
	} else if (request.url === '/about_us') {
		response.write('<h1>Somos una asociasion</h1>');
		return response.end();
	} else {
		response.write(`
		<h1>No se encontro el servidor</h1>
		<a href="/">Volver a la pagina principal</a>
		`);
		return response.end();
	}
});

server.listen(3000);

console.log('server escucha el puerto 3000');
