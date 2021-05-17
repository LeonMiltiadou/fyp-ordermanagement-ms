const checkoutFunctions = require('../functions/checkout/checkout')

const listOrders = async (req, res) => {

  const order = await orderfunction.listOrders();

  //Checks to see that the required object keys exist, otherwise an error occured
  if (order.error || order.data || order.status) {

    //If there was an error listing the orders
    if (order.error) {

      if (order.data) {
        res.status(order.status).json({ error: order.error, data: order.data });
      } else {
        res.status(order.status).json({ error: order.error });
      }
    } else {
      //Successfully listed orders
      res.status(order.status).json(order.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }

};

const exportFunctions = { listOrders, orderFunction: checkoutFunctions };
module.exports = exportFunctions;


