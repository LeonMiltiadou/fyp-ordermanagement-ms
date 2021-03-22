# fyp-cart-ms

Api Endpoints:

cartroutes.post('/addto', addtocart);

cartroutes.get('/fetch/:cartID', fetchcart);

cartroutes.get('/create', createcart);

cartroutes.delete('/removefrom/:cartID/:lineItemId',removefromcart);

cartroutes.delete('/empty/:cartID',emptycart);

cartroutes.put('/updateqty',updatecartqty);
