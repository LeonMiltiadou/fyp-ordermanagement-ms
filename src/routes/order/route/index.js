const routeRoutes = require('express').Router();
const { calculateRoute } = require('./calculateRoute.js');

routeRoutes.post('/calculate', calculateRoute);

module.exports = routeRoutes;