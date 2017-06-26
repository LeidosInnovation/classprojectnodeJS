var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   db.collection("skills").find({}).toArray(function(err, result) {
     if (err) throw err;
    console.log(result);
     db.close();
  });
   db.collection("employees").find({}).toArray(function(err, result) {
     if (err) throw err;
    console.log(result);
     db.close();
  });
   db.collection("lcat").find({}).toArray(function(err, result) {
     if (err) throw err;
    console.log(result);
     db.close();
  });
}); 