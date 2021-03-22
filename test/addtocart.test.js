// test/addtocart.test.js
const axios = require('axios');
require('dotenv').config()

var request = require("request");
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../lib/routes/server');
let should = chai.should();


chai.use(chaiHttp);


describe("Add To Cart API", function () {
  beforeEach(() => {
  })

  describe("Add To Cart API", function () {


    it("should create a cart when a get request is sent", (done) => {
      
      chai.request(server)
        .post('/cart/addto')
        .send()
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.should.have.property('total_unique_items');
          res.body.should.have.property('line_items');
          done();
        });
    });
  });


});