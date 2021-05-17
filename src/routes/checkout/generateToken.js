const checkoutFunction = require('../functions/checkout/checkout')

const generateToken = async (req, res) => {

  const cartID = req.body.cartID;

  const order = await exportFunctions.checkoutFunction.generateToken(cartID);

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

const exportFunctions = { generateToken, checkoutFunction };
module.exports = exportFunctions;


