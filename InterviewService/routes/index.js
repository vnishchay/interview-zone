
const express = require('express');
const routers = express.Router();

routers.use(require('./userRoutes'))
routers.use(require('./authroutes'));
routers.use(require('./questionsRoute'));
routers.use(require('./interviewRoutes'));


module.exports = routers;
