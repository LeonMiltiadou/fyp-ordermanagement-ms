import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/orders/";

const orderAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});


const orderFunctions = {

  listOrders: async () => {
    return await orderAPI.get().then((orders) => {
      return { data: orders.data, status: orders.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error creating an order', error);
        return { data: 'There was an error creating an order', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  },

  refundOrder: async (orderID) => {
    return await orderAPI.post(orderID + "/actions/refund").then((order) => {
      return { data: order.data, status: order.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error creating an order', error);
        return { data: 'There was an error creating an order', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  },

  retrieveOrder: async (orderID) => {
    return await orderAPI.get(orderID).then((order) => {
      return { data: order.data, status: order.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error creating an order', error);
        return { data: 'There was an error creating an order', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  }
}

module.exports = orderFunctions;