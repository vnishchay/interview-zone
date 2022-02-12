/**
 * index.js
 * @description :: index route file of client platform.
 */

const express = require('express');
const routers = express.Router();



routers.use(require('./questionsRoute'));
routers.use(require('./interviewRoutes'));
routers.use(require('./authroutes'));


module.exports = routers;
