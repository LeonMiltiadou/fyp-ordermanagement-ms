const orderfunction = require('../functions/order')

module.exports = async (req, res) => {

    const token = req.params.token;

    const cart = await orderfunction.fetchCart(token);

    res.status(cart.status).json(cart.data);
};