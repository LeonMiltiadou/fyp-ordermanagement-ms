const customerFunction = require('../functions/customer/customer')

const createCustomer = async (req, res) => {
  let reqBody = req.body;

  const order = await exportFunctions.customerFunction.createCustomer(reqBody);

  //Checks to see that the required object keys exist, otherwise an error occured
  if (order.error || order.data || order.status) {

    //If there was an error creating an order
    if (order.error) {

      if (order.data) {
        res.status(order.status).json({ error: order.error, data: order.data });
      } else {
        res.status(order.status).json({ error: order.error });
      }
    } else {
      //Successfully added to cart
      res.status(order.status).json(order.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }

};

const exportFunctions = { createCustomer, customerFunction };
module.exports = exportFunctions;


