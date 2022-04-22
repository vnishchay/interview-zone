
const express = require('express');
const routers = express.Router();


routers.use(require('./authroutes'));
routers.use(require('./questionsRoute'));
routers.use(require('./interviewRoutes'));
routers.use(require('./userRoutes'))

module.exports = routers;
