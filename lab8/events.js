'use strict';
// Pubnub service configuration
// ===========================

var PubNub = require('pubnub');

var pubnub = new PubNub({
            publishKey : 'pub-c-d1b45416-77d8-4b93-9ab0-19e7993474e8',
            subscribeKey : 'sub-c-d023d464-d9b7-11e5-bdd5-02ee2ddab7fe',
            secretKey: "sec-c-OTQzZjMyMjctN2RjMC00NWRiLTg1NjQtYTlkZTE5NjY5ZGQ0",
    		ssl: true
});



module.exports = {
  publish: function(channel,message){
    pubnub.publish({
             channel: channel,
             message: JSON.stringify(message)},
             function(status, response) {
               if (status.error) {
                 console.log(status)
               } else {
                 console.log("message Published w/ timetoken", response.timetoken)
               }
             });
  },
  subscribe: function(channel, callback){

    pubnub.addListener({
        
        message: function(m) {
            // handle message
            
            var msg = m.message; // The Payload

            callback(msg);
            }
  });
    // Subscribe to the demo_tutorial channel
    pubnub.subscribe({
        channels: [channel]
    });
  }
}
