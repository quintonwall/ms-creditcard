
/*

test method that simply returns true for any number.

 host:port/validatecardnumber/id=1234
*/
function validatenumber(req,res,next) {
  var ccnum = req.params.id,
  promise;

  var CreditCard = require('credit-card');

  var card = {
    cardType: 'VISA',
    number: '4111111111111111',
    expiryMonth: '03',
    expiryYear: '2100',
    cvv: '123'
  };
  var validation = CreditCard.validate(card);

  console.log('Credit card number is '+ccnum);


  return res.send(JSON.stringify("true"));
}

/*
 return a random credit score number between 0 and 850
 */ 
function creditscore(req,res,next) {
 console.log('Getting random credit score');
 return res.send(JSON.stringify("650"));
}




/*
  Accept a JSON payload. see testcc.json for example

  Uses https://www.npmjs.com/package/credit-card

  For a list of test credit cards, see:
   http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
*/
function validatecard(req,res,next) {

    var data = req.body;


  var CreditCard = require('credit-card');

  var card = {
    cardType: data.cardType,
    number: data.number,
    expiryMonth: data.expiryMonth,
    expiryYear: data.expiryYear,
    cvv: data.ccv
  };
  var validation = CreditCard.validate(card);


  return res.send(JSON.stringify(validation));
}

exports.validatenumber = validatenumber;
exports.validatecard = validatecard;
