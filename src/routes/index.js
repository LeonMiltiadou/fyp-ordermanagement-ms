const routes = require('express').Router();
const orderRoutes = require('./order');
const checkoutRoutes = require('./checkout');
const customerRoutes = require('./customer');

routes.use('/order', orderRoutes);
routes.use('/checkout', checkoutRoutes);
routes.use('/customer', customerRoutes);

module.exports = routes;