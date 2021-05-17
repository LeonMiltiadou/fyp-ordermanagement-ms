const orderFunction = require('../functions/order/order')

const retrieveOrder = async (req, res) => {

  const orderID = req.params.orderID;

  const order = await orderFunction.retrieveOrder(orderID);

  //Checks to see that the required object keys exist, otherwise an error occured
  if (order.error || order.data || order.status) {

    //If there was an error retrieving an order
    if (order.error) {

      if (order.data) {
        res.status(order.status).json({ error: order.error, data: order.data });
      } else {
        res.status(order.status).json({ error: order.error });
      }
    } else {
      //Successfully retrieved an order
      res.status(order.status).json(order.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }

};

const exportFunctions = { retrieveOrder, orderFunction };
module.exports = exportFunctions;


