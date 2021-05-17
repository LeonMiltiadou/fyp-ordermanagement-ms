"use strict";

var orderRoutes = require('express').Router();

var routeRoutes = require('./route');

var _require = require('./refundOrder'),
    refundOrder = _require.refundOrder;

var _require2 = require('./retrieveOrder'),
    retrieveOrder = _require2.retrieveOrder;

var _require3 = require('./listOrders'),
    listOrders = _require3.listOrders;

orderRoutes.post('/refund', refundOrder);
orderRoutes.get('/retrieve', retrieveOrder);
orderRoutes.get('/list', listOrders);
orderRoutes.use('/route', routeRoutes);
module.exports = orderRoutes;