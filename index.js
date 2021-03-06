'use strict';

module.exports = require('./lib/framework.js');
module.exports.service = require('./lib/service');
module.exports.controller = require('./lib/controller');

module.exports.Services = require('./lib/service');
module.exports.Controllers = require('./lib/controller');
module.exports.ErrorConfig = require('./config/config.error.js');
