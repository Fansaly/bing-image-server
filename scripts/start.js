'use strict';
// cross-env NODE_ENV=development nodemon src/index.js --exec babel-node

const config = require('../config');
const execSync = require('child_process').execSync;

process.env.NODE_ENV = 'development';
process.env.PORT = config.serverPort;

const cmd =
`nodemon ${config.appIndexJs}\
  --watch ${config.appSrc}\
  --exec 'eslint --cache ${config.appSrc}/* && babel-node'\
`;
execSync(cmd, { stdio: [ 0, 1, 2 ] });
