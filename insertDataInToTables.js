var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   var myobj = [{ employeeName: "Noor S", lcat: "CAT1", skill: "JAVA", avail: "Yes" },
                {employeeName: "Sachin K", lcat: "CAT2", skill: ".NET", avail: "Yes" },
                {employeeName: "Aditya C", lcat: "CAT3", skill: "NODEJS", avail: "Yes" },
                {employeeName: "Donald", lcat: "CAT4", skill: "TESTING", avail: "Yes" },
                {employeeName: "Michael", lcat: "CAT5", skill: "MONGODBA", avail: "Yes" }
   
   ];
    db.collection("employees").insertMany(myobj, function(err, res) {
     if (err) throw err;
    console.log(" records inserted in employees table");
    db.close();   
  });

   var lcatObj =[ { lcat: "CAT1", desc: "Information Technology Specialist 1" },
                { lcat: "CAT2", desc: "Information Technology Specialist 2" },
                { lcat: "CAT3", desc: "Information Technology Specialist 3" },
                { lcat: "CAT4", desc: "Information Technology Specialist 4" },
                { lcat: "CAT5", desc: "Information Technology Specialist 5" },
   ];
  db.collection("lcat").insertMany(lcatObj, function(err, res) {
     if (err) throw err;
    console.log("records inserted in lcat table");
    db.close();   
  });

     var skillObj = [{ skill:"JAVA"}, 
                    { skill:".NET"},
                    { skill:"NODEJS"},
                    { skill:"TESTING"},
                    { skill:"MONGODBA"}
     ];

  db.collection("skills").insertMany(skillObj, function(err, res) {
     if (err) throw err;
    console.log("records inserted in skills table");
    db.close();   
  });

 
}); 