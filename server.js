var express = require('express'),
bodyParser = require('body-parser'),
compression = require('compression'),
creditcard = require('./server/creditcard'),
app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(compression());

app.use('/', express.static(__dirname + '/www'));

app.get('/credit', creditcard.creditscore);
app.get('/validatecardnumber/:id', creditcard.validatenumber);
app.post('/validatecreditcard/', creditcard.validatecard);

app.listen(app.get('port'), function() {
  console.log('Credit Card server listening on port '+app.get('port'));
});
