'use strict';
// babel src -d build

const fs = require('fs-extra');
const config = require('../config');
const execSync = require('child_process').execSync;

fs.emptyDirSync(config.appBuild);

const cmd = `babel ${config.appSrc} -d ${config.appBuild}`;
execSync(cmd, { stdio: [ 0, 1, 2 ] });
