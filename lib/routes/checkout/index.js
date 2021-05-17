"use strict";

var checkoutRoutes = require('express').Router();

var _require = require('../checkout/createOrder'),
    createOrder = _require.createOrder;

var _require2 = require('../checkout/generateToken'),
    generateToken = _require2.generateToken;

checkoutRoutes.post('/create', createOrder);
checkoutRoutes.post('/generatetoken', generateToken);
module.exports = checkoutRoutes;