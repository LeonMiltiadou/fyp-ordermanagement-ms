import axios from 'axios';
require('dotenv').config()
const FormData = require("form-data");

const url = process.env.ROUTEXLBASEURL + "/";

const routeAPI = axios.create({
  baseURL: url,
  timeout: 12000,
  auth: {
    'username': process.env.ROUTEXLUSERNAME,
    "password": process.env.ROUTEXLPASSWORD
  }
});


const routeFunctions = {

  calculateRoute: async (locationArray) => {
    let formData = new FormData();
    formData.append('locations', JSON.stringify(locationArray));
    return await routeAPI.post("tour", formData, { headers: formData.getHeaders() }).then((route) => {
      return { data: route.data, status: route.status };
    }).catch((error) => {
      if (error.response) {
        console.error('There was an error calculating a route', error);
        return { data: 'There was an error calculating a route', status: error.response.status };
      } else {
        return { data: error.message, status: 500 };
      }
    });
  }
}

module.exports = routeFunctions;