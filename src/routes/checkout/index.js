const checkoutRoutes = require('express').Router();

const { createOrder } = require('../checkout/createOrder');
const { generateToken } = require('../checkout/generateToken');

checkoutRoutes.post('/create', createOrder);
checkoutRoutes.post('/generatetoken', generateToken);

module.exports = checkoutRoutes;