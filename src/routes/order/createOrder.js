const orderfunction = require('../functions/order')

module.exports = async (req, res) => {

  const ID = req.params.ID;

  const cart = await orderfunction.createOrder(ID);

  res.status(cart.status).json(cart.data);

};