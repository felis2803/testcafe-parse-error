const { fork }   = require('child_process');
const { server } = require('./server');

const childProcess = fork('./runner', { env: { NODE_OPTIONS: '--insecure-http-parser' } });

childProcess.on('exit', () => server.close());
