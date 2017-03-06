'use strict';

// Mail service configuration
// ===========================

var PubNub = require('pubnub');

module.exports = new PubNub({
            publishKey : 'pub-c-d1b45416-77d8-4b93-9ab0-19e7993474e8',
            subscribeKey : 'sub-c-d023d464-d9b7-11e5-bdd5-02ee2ddab7fe',
            secretKey: "sec-c-OTQzZjMyMjctN2RjMC00NWRiLTg1NjQtYTlkZTE5NjY5ZGQ0",
    		ssl: true
});
