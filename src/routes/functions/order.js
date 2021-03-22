import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/checkouts/";

const cartAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

module.exports = {

  /**
   * Generates a token to be used to create an order
   * https://commercejs.com/docs/api/#generate-token
   */

  generateToken: async (ID) => {
    return await cartAPI.post(ID).then((cart) => {
      return { data: cart.data, status: cart.status };
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

  createOrder: async (token) => {
    return await cartAPI.post(token).then((cart) => {
      return { data: cart.data, status: cart.status };
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