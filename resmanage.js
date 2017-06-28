var express = require('express');
var fs = require('fs');
var myParser = require("body-parser");
var mongojs = require('mongojs');

var dbcat = mongojs('mongodb://localhost:27017/mydb',['lcat']);
var dbskill = mongojs('mongodb://localhost:27017/mydb',['skills']);
var dbdatatable = mongojs('mongodb://localhost:27017/mydb',['employees']);

var app = express();
app.use(express.static(__dirname)); 
app.use(myParser.json());

// app.get is the standard html service to display the main page when the URL is typed for it.
app.get('/managementmain.htm', function(req, res) {
        //Security could go here to block unauthorized access. But in this case
        //we will send the page to all requests for this full address.
 	   res.sendFile( __dirname + "/" + "managementmain.htm" );
	}
);

// read category table and respond.
app.post("/read_category", function(req, res){
	var response;
	dbcat.lcat.find(function(err, lcat) {
		if(err) {
			res.end(err);
		}
		res.end(JSON.stringify(lcat));
	});
 
});

// read skill table and respond.
app.post("/read_skill", function(req, res){
	var response;
	dbskill.skills.find(function(err, skills) {
		if(err) {
			res.end(err);
		}
		res.end(JSON.stringify(skills));
	});
	
});

// read skill table and respond.
app.post("/read_datatable", function(req, res){
	var response;
	dbdatatable.employees.find(function(err, employees) {
		if(err) {
			res.end(err);
		}
		res.end(JSON.stringify(employees));
	});
	
});

// Delete Resource from Database table
app.post("/delete_resource", function(req, res){
	var response;
	dbdatatable.employees.remove({_id:mongojs.ObjectId(req.body.myid)},function(err, employees) {
		if(err) {
			res.end(err);
		}
		res.end(JSON.stringify(employees));
	});
	
});

// Add resource to Database table
app.post("/add_resource", function(req, res){
	var response;
	dbdatatable.employees.insert({lcat:req.body.category, skill:req.body.skill, employeeName:req.body.employee, avail: req.body.availability },function(err, employees) {
		if(err) {
			res.end(err);
		}
		res.end(JSON.stringify(employees));
	});
	
});

var server = app.listen(process.env.PORT || 3002, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);

});