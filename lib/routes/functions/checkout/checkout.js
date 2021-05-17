"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require('dotenv').config();

var url = process.env.COMMERCEBASEURL + "/checkouts/";

var checkoutAPI = _axios["default"].create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

var checkoutFunctions = {
  /**
   * Generates a token to be used to create an order
   * https://commercejs.com/docs/api/#generate-token
   */
  generateToken: function () {
    var _generateToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cartID) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return checkoutAPI.get(cartID, {
                params: {
                  type: "cart"
                }
              }).then(function (checkout) {
                return {
                  data: checkout.data,
                  status: checkout.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error generating a token', error);
                  return {
                    data: 'There was an error generating a token',
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

    function generateToken(_x) {
      return _generateToken.apply(this, arguments);
    }

    return generateToken;
  }(),

  /**
  * Creates an order
  * https://commercejs.com/docs/api/#capture-order
  */
  createOrder: function () {
    var _createOrder = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(tokenID, orderDetails) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return checkoutAPI.post(tokenID, orderDetails).then(function (checkout) {
                return {
                  data: checkout.data,
                  status: checkout.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error creating an order', error);
                  return {
                    data: error.response.data,
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

    function createOrder(_x2, _x3) {
      return _createOrder.apply(this, arguments);
    }

    return createOrder;
  }()
};
module.exports = checkoutFunctions;