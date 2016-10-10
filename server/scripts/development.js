process.env.NODE_ENV = 'development';

var nodemon = require('nodemon');
nodemon('--exec babel-node --presets=es2015 ./server/main.js --watch ./server');

nodemon.on('start', () => {
	console.log('[nodemon] App has started');
}).on('quit', () => {
    console.log('[nodemon] App has quit');
}).on('restart', (files) => {
    console.log('[nodemon] App restarted due to:', files);
});
