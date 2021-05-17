"use strict";

var routeRoutes = require('express').Router();

var _require = require('./calculateRoute.js'),
    calculateRoute = _require.calculateRoute;

routeRoutes.post('/calculate', calculateRoute);
module.exports = routeRoutes;