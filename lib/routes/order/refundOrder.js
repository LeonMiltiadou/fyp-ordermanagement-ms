"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var orderFunction = require('../functions/order/order');

var refundOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var orderID, order, errorMsg;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            orderID = req.body.orderID;
            _context.next = 3;
            return orderFunction.refundOrder(orderID);

          case 3:
            order = _context.sent;

            //Checks to see that the required object keys exist, otherwise an error occured
            if (order.error || order.data || order.status) {
              //If there was an refuding an order
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
                //Successfully refunded an order
                res.status(order.status).json(order.data);
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

  return function refundOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var exportFunctions = {
  refundOrder: refundOrder,
  orderFunction: orderFunction
};
module.exports = exportFunctions;