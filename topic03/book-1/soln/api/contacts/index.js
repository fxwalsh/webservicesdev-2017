var mongo = require('mongodb');
var BSON = mongo.BSONPure;
// get mongo client
var mongoClient = mongo.MongoClient;
var mongoDb;
mongoClient.connect("mongodb://test:ilikecake@ds039311.mlab.com:39311/contacts_db", function(err, db) {
if(!err) {
  console.log("We are connected");
  mongoDb = db;
}
else
{
    console.log("Unable to connect to the db");
}
});


// Get list of contacts
exports.index = function(req, res) {
  // Connect to the db
  if (mongoDb){
    var collection = mongoDb.collection('contacts');
    collection.find().toArray(function(err, items) {
        res.send(items);
    });
  }
  else
  {
      console.log('No database object!');
  }
} ;
// Creates a new contact in datastore.
exports.create = function(req, res) {

};

// Creates a new contact in datastore.
exports.update = function(req, res) {

};
// delete an existing contact in datastore.
exports.delete = function(req, res) {

};
