'use strict';

const Hapi   = require('hapi');

(async () => {
	const server = new Hapi.Server({port: 2002});
	const routes = require('./src/routes.js');

	server.route(routes);
	
	try {
		await server.start();
		console.info(`Serwer wystartowal: ${server.info.uri}`);
	} catch (err) {
		throw err;
	}
})();