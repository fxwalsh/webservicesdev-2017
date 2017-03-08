var api_key = 'key-a8edf6eefe384c732ea3a580c3fef566';
var domain = 'sandbox649bc25b611a4460bad670b0ddf279c6.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var contactEvent = require('./events');




    
var  messageHandler = function(m) {
         // The Payload
        var data = {
            from: 'WIT BSc IT <me@wit.ie>',
            to: JSON.parse(m).email,
            subject: 'Welcome',
            text: 'Welcome to the company!!!'
          };

          mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
        }

contactEvent.subscribe('create_contact_event', messageHandler)
