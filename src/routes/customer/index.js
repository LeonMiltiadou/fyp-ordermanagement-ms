const customerRoutes = require('express').Router();

const { getCustomer } = require('./getCustomer');
const { createCustomer } = require('./createCustomer');

customerRoutes.get('/get/:customerID', getCustomer);
customerRoutes.post('/create', createCustomer);

module.exports = customerRoutes;