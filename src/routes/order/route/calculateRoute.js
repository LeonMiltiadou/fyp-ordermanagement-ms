const routeFunctions = require('../../functions/order/route/route')

const calculateRoute = async (req, res) => {

  const locationArray = req.body.locations;

  const route = await routeFunctions.calculateRoute(locationArray);

  //Checks to see that the required object keys exist, otherwise an error occured
  if (route.error || route.data || route.status) {

    //If there was an error calculating a route
    if (route.error) {

      if (route.data) {
        res.status(route.status).json({ error: route.error, data: route.data });
      } else {
        res.status(route.status).json({ error: route.error });
      }
    } else {
      //Successfully calculated route
      res.status(route.status).json(route.data);
    }

  } else {
    const errorMsg = "An unexpected error has occured";
    console.error(errorMsg)
    res.status(500).json({ error: errorMsg })
  }

};

const exportFunctions = { calculateRoute, routeFunctions };
module.exports = exportFunctions;