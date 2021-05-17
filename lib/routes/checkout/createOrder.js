"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var checkoutFunction = require('../functions/checkout/checkout');

var createOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var tokenID, orderDetails, order, errorMsg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenID = req.body.tokenID;
            orderDetails = req.body;
            _context.next = 4;
            return exportFunctions.checkoutFunction.createOrder(tokenID, orderDetails);

          case 4:
            order = _context.sent;

            //Checks to see that the required object keys exist, otherwise an error occured
            if (order.error || order.data || order.status) {
              //If there was an error creating an order
              if (order.error) {
                if (order.data) {
                  res.status(order.status).json({
                    error: order.error,
                    data: order.data
                  });
                } else {
                  res.status(order.status).json({
                    error: order.error
                  });
                }
              } else {
                //Successfully added to cart
                res.status(order.status).json(order.data);
              }
            } else {
              errorMsg = "An unexpected error has occured";
              console.error(errorMsg);
              res.status(500).json({
                error: errorMsg
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var exportFunctions = {
  createOrder: createOrder,
  checkoutFunction: checkoutFunction
};
module.exports = exportFunctions;