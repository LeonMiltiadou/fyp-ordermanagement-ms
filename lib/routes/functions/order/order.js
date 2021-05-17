"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require('dotenv').config();

var url = process.env.COMMERCEBASEURL + "/orders/";

var orderAPI = _axios["default"].create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

var orderFunctions = {
  listOrders: function () {
    var _listOrders = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return orderAPI.get().then(function (orders) {
                return {
                  data: orders.data,
                  status: orders.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error creating an order', error);
                  return {
                    data: 'There was an error creating an order',
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function listOrders() {
      return _listOrders.apply(this, arguments);
    }

    return listOrders;
  }(),
  refundOrder: function () {
    var _refundOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(orderID) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return orderAPI.post(orderID + "/actions/refund").then(function (order) {
                return {
                  data: order.data,
                  status: order.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error creating an order', error);
                  return {
                    data: 'There was an error creating an order',
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function refundOrder(_x) {
      return _refundOrder.apply(this, arguments);
    }

    return refundOrder;
  }(),
  retrieveOrder: function () {
    var _retrieveOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(orderID) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return orderAPI.get(orderID).then(function (order) {
                return {
                  data: order.data,
                  status: order.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error creating an order', error);
                  return {
                    data: 'There was an error creating an order',
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function retrieveOrder(_x2) {
      return _retrieveOrder.apply(this, arguments);
    }

    return retrieveOrder;
  }()
};
module.exports = orderFunctions;