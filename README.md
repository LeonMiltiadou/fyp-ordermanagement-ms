# fyp-ordermanagement-ms

## Api Endpoints:

/order/create
/order/refund
/order/retrieve
/order/list

/order/route/calculate



## Body:

### Body format

{
   "orders":[
      {
         "id":"",
         "shipping":{
            "name":"",
            "street":"",
            "town_city":"",
            "county_state":"",
            "postal_zip_code":"",
            "country":""
         }
      }
   ]
}

### Example

{
   "orders":[
      {
         "id":"ord_p7ZAMo1xwNJ4xX",
         "shipping":{
            "name":"John Doe",
            "street":"123 Fake St",
            "town_city":"San Francisco",
            "county_state":"CA",
            "postal_zip_code":"94103",
            "country":"US"
         }
      }
   ]
}