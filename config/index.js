'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const getAppName = appPackageJson => require(appPackageJson).name;

const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || '0.0.0.0';
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3003;

module.exports = {
  appName: getAppName(resolveApp('package.json')),
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appBuild: resolveApp('build'),
  appIndexJs: resolveApp('src/index.js'),
  appBuildJs: resolveApp('build/index.js'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  serverProtocol: PROTOCOL,
  serverHost: HOST,
  serverPort: DEFAULT_PORT,
};
