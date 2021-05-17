import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/customers/";

const customerAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCESECRETKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});


const checkoutFunctions = {

  getCustomer: async (customerID) => {
    return await customerAPI.get(customerID).then((customer) => {
      return { data: customer.data, status: customer.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error retrieving the customer', error);
        return { data: 'There was an error retrieving the customer', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  },

  createCustomer: async (requestBody) => {

    return await customerAPI.post("", requestBody).then((customer) => {
      return { data: customer.data, status: customer.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error creating an customer', error);
        return { data: error.response.data, status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  }
}

module.exports = checkoutFunctions;