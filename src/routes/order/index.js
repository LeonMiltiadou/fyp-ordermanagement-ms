const orderRoutes = require('express').Router();
const routeRoutes = require('./route');

const { refundOrder } = require('./refundOrder');
const { retrieveOrder } = require('./retrieveOrder');
const { listOrders } = require('./listOrders');

orderRoutes.post('/refund', refundOrder);
orderRoutes.get('/retrieve', retrieveOrder);
orderRoutes.get('/list', listOrders);

orderRoutes.use('/route', routeRoutes)
module.exports = orderRoutes;