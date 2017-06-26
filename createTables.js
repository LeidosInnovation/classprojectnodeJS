var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/rmdb";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   db.createCollection("employees",  function(err, res) {
    if (err) throw err;
    console.log("employees Table created!");
    db.close();
  });

  db.createCollection("lcat",  function(err, res) {
    if (err) throw err;
    console.log("lcat Table created!");
    db.close();
  });

  db.createCollection("skills",  function(err, res) {
    if (err) throw err;
    console.log("skills Table created!");
    db.close();
  });
  
});