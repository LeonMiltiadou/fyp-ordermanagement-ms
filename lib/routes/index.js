"use strict";

var routes = require('express').Router();

var orderRoutes = require('./order');

var checkoutRoutes = require('./checkout');

routes.use('/order', orderRoutes);
routes.use('/checkout', checkoutRoutes);
module.exports = routes;