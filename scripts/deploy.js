'use strict';
// cross-env NODE_ENV=production pm2 start build/index.js --name bing-image-server

const config = require('../config');
const execSync = require('child_process').execSync;

process.env.NODE_ENV = 'production';
process.env.PORT = config.serverPort;

const cmd = `pm2 start ${config.appBuildJs} --name ${config.appName}`;
execSync(cmd, { stdio: [ 0, 1, 2 ] });
