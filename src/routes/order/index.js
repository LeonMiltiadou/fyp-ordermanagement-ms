const orderroutes = require('express').Router();

const createOrder = require('./createOrder');
const generateToken = require('./generateToken');

orderroutes.get('/create/:ID', createOrder);
orderroutes.get('/generatetoken/:token', generateToken);

module.exports = orderroutes;