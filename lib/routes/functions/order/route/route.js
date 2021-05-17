"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require('dotenv').config();

var FormData = require("form-data");

var url = process.env.ROUTEXLBASEURL + "/";

var routeAPI = _axios["default"].create({
  baseURL: url,
  timeout: 12000,
  auth: {
    'username': process.env.ROUTEXLUSERNAME,
    "password": process.env.ROUTEXLPASSWORD
  }
});

var routeFunctions = {
  calculateRoute: function () {
    var _calculateRoute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(locationArray) {
      var formData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append('locations', JSON.stringify(locationArray));
              _context.next = 4;
              return routeAPI.post("tour", formData, {
                headers: formData.getHeaders()
              }).then(function (route) {
                return {
                  data: route.data,
                  status: route.status
                };
              })["catch"](function (error) {
                if (error.response) {
                  console.error('There was an error calculating a route', error);
                  return {
                    data: 'There was an error calculating a route',
                    status: error.response.status
                  };
                } else {
                  return {
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function calculateRoute(_x) {
      return _calculateRoute.apply(this, arguments);
    }

    return calculateRoute;
  }()
};
module.exports = routeFunctions;