"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var routeFunctions = require('../../functions/order/route/route');

var calculateRoute = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var locationArray, route, errorMsg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            locationArray = req.body.locations;
            _context.next = 3;
            return routeFunctions.calculateRoute(locationArray);

          case 3:
            route = _context.sent;

            //Checks to see that the required object keys exist, otherwise an error occured
            if (route.error || route.data || route.status) {
              //If there was an error calculating a route
              if (route.error) {
                if (route.data) {
                  res.status(route.status).json({
                    error: route.error,
                    data: route.data
                  });
                } else {
                  res.status(route.status).json({
                    error: route.error
                  });
                }
              } else {
                //Successfully calculated route
                res.status(route.status).json(route.data);
              }
            } else {
              errorMsg = "An unexpected error has occured";
              console.error(errorMsg);
              res.status(500).json({
                error: errorMsg
              });
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function calculateRoute(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var exportFunctions = {
  calculateRoute: calculateRoute,
  routeFunctions: routeFunctions
};
module.exports = exportFunctions;