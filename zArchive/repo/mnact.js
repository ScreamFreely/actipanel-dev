var express = require('express');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3305;
var stripe = require("stripe")("sk_live_7o1776gzPeN5kuloJJnSTG1Q");


app.use(bodyParser.json());



app.post('/process_payment', function(req,res){
    console.log(req.body);
  var token_id = req.body.token_id;
  var purchase_price = req.body.price;

  //console.log(token.id +"\n"+purchase_price);

  var charge = stripe.customers.create({
      email: req.body.email,
      plan: 'mn-mp' + req.body.price,
      source: token_id,
  }, function(err, customer) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      res.json({"status":"failure", "reason":"card was declined"});
    }
    else{
	console.log(customer);
	res.json({"status":"success"});
    }
  });
})


app.use(history());

app.use(serveStatic(__dirname + "/dist"));


app.listen(port, function(){
  console.log('Listening on port', port);
});
