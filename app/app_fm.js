const forever = require('forever-monitor');
const path = require('path');

const child = new (forever.Monitor)(path.resolve(__dirname + '/app.js'), {
    max: 2,
    silent: true,
    args: [],
});

child.on('exit', () => console.log('app.js has exited after 2 restarts'));

child.start();