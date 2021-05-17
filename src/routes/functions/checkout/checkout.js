import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/checkouts/";

const checkoutAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});


const checkoutFunctions = {

  /**
   * Generates a token to be used to create an order
   * https://commercejs.com/docs/api/#generate-token
   */

  generateToken: async (cartID) => {
    return await checkoutAPI.get(cartID, { params: { type: "cart" } }).then((checkout) => {
      return { data: checkout.data, status: checkout.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error generating a token', error);
        return { data: 'There was an error generating a token', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  },

  /**
  * Creates an order
  * https://commercejs.com/docs/api/#capture-order
  */

  createOrder: async (tokenID, orderDetails) => {

    return await checkoutAPI.post(tokenID, orderDetails).then((checkout) => {
      return { data: checkout.data, status: checkout.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error creating an order', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  }
}

module.exports = checkoutFunctions;