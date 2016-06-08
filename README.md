# ms-creditcard
Microservice for credit card related processing.

##Installation

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##Usage

Simply POST a JSON payload to host:post/validatecreditcard.

In addition, the repo contains a testpost.sh which uses CURL to test via the command line.

###JSON payload

The following sample payload can be used, with a full list of test credit cards available at  http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm


{ "cardType": "VISA", "number": "4111111111111111", "expiryMonth": "03", "expiryYear": "2100", "cvv": "123" }

###Response
{"card":{"cardType":"VISA","number":"4111111111111111","expiryMonth":"03","expiryYear":"2100"},"validCardNumber":true,"validExpiryMonth":true,"validExpiryYear":true,"validCvv":false,"isExpired":false}
