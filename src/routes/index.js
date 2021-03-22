const routes = require('express').Router();
const orderroutes = require('./cart');

routes.use('/order', orderroutes);

module.exports = routes;