const customerFunction = require('../functions/customer/customer')

const getCustomer = async (req, res) => {

  const customerID = req.params.customerID;

  const order = await exportFunctions.customerFunction.getCustomer(customerID);

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

const exportFunctions = { getCustomer, customerFunction };
module.exports = exportFunctions;


