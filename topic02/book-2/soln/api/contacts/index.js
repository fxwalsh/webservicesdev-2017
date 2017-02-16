var datastore = require('./datastore');
var shortId = require('shortid');
// Get list of contacts
exports.index = function(req, res) {
  return res.json(200, datastore.contacts);
} ;
// Creates a new contact in datastore.
exports.create = function(req, res) {
  var contact = {
     id: shortId.generate(),
     name: req.body.name,
     address: req.body.address,
     phone_number: req.body.phone_number
  };
  datastore.contacts.push(contact)
  return res.json(201, contact);
};

// Update an existing contact in datastore.
exports.update = function(req, res) {
    var index = datastore.contacts.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var contact = datastore.contacts[index]
       contact.name =  req.body.name
       contact.address = req.body.address
       contact.phone_number = req.body.phone_number
       return res.send(200, contact)
    } else {
        return res.send(404)
    }
};
// delete an existing contact in datastore.
exports.delete = function(req, res) {
    var index = datastore.contacts.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var contact = datastore.contacts.splice(index,1);
       return res.send(200, contact)
    } else {
        return res.send(404)
    }
};
