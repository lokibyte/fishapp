var config = require('../config.js');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
var mysql = require('mysql');

var con = mysql.createConnection(config.mysqlCon);
var http = require('http');
var sha1 = require('sha1');
var fs = require('fs');

const api = new WooCommerceRestApi({
  url: "http://coastalfish.in/",
  consumerKey: config.Wooseafood.key,
  consumerSecret: config.Wooseafood.secret,
  version: "wc/v3"
});

exports.getProducts = function([], callbackSuccess, callbackError) {
	api.get("products", {
	  per_page: 100, // 100 products per page
	})
	.then((response) => {
		// console.info("success",response);
		callbackSuccess({"success":true,"data":response.data});
	})
	.catch((error) => {
		// console.info("error",error);
		callbackError({"success":false, "data":error.response.data});
	})
	.finally(() => {
		// console.info("finally");
		// Always executed.
	});
}

exports.getCategories = function([], callbackSuccess, callbackError) {
	api.get("products/categories", {
	  per_page: 100, // 100 products per page
	})
	.then((response) => {
		// console.info("success",response);
		callbackSuccess({"success":true,"data":response.data});
	})
	.catch((error) => {
		// console.info("error",error);
		callbackError({"success":false, "data":error.response.data});
	})
	.finally(() => {
		// console.info("finally");
		// Always executed.
	});
}

exports.getcoupons = function([], callbackSuccess, callbackError) {
	api.get("coupons", {
	  per_page: 50, // 100 products per page
	})
	.then((response) => {
		// console.info("success",response);
		callbackSuccess({"success":true,"data":response.data});
	})
	.catch((error) => {
		// console.info("error",error);
		callbackError({"success":false, "data":error.response.data});
	})
	.finally(() => {
		// console.info("finally");
		// Always executed.
	});
}

exports.getOrders = function([], callbackSuccess, callbackError) {
	api.get("orders", {
	  per_page: 100, // 100 products per page
	  customer: 1234567890
	})
	.then((response) => {
		// console.info("success",response);
		callbackSuccess({"success":true,"data":response.data});
	})
	.catch((error) => {
		// console.info("error",error);
		callbackError({"success":false, "data":error.response.data});
	})
	.finally(() => {
		// console.info("finally");
		// Always executed.
	});
}


exports.test = function([], callbackSuccess, callbackError) {
		// List products
	// api.get("products", {
	// api.get("products/categories", {
	// api.get("/orders", {
	api.get("/wp-json/userlogin/username/9900680706", {
	  per_page: 20, // 20 products per page
	})
	.then((response) => {
		// Successful request
		// console.log("Response Status:", response.status);
		// console.log("Response Headers:", response.headers);
		// console.log("Response Data:", response.data);
		// console.log("Total of pages:", response.headers['x-wp-totalpages']);
		// console.log("Total of items:", response.headers['x-wp-total']);
		callbackSuccess({"success":true,"data":response.data});
	})
	.catch((error) => {
		callbackError({"success":false, "data":error.response.data});
		// // Invalid request, for 4xx and 5xx statuses
		// console.log("Response Status:", error.response.status);
		// console.log("Response Headers:", error.response.headers);
		// console.log("Response Data:", error.response.data);
	})
	.finally(() => {
		// Always executed.
	});
		
		// con.query(q1,[mobile,address,email,userId], function(err, rows, fields) {
		// 	if(err) {
		// 		console.log("Error while profile updating "+JSON.stringify(err));
		// 		callbackError({"response":false, "responseString":JSON.stringify(err), "state":"Deprecated!!!! \nPlease use the new API's."});
		// 	} else {
		// 		console.info("updated",rows);
		// 		callbackSuccess({"response":true,"responseString":"Profile updated successfully", "state":"Deprecated!!!! \nPlease use the new API's."});
		// 	}
		// });
}

exports.updateprofile = function(userId, address,mobile,email, callbackSuccess, callbackError) {
	console.info("update settings model",userId, address,mobile,email);

		q1 = "update users set Mobile_Number=?,Address=?where Email =? and User_id =?";
		con.query(q1,[mobile,address,email,userId], function(err, rows, fields) {
			if(err) {
				console.log("Error while profile updating "+JSON.stringify(err));
				callbackError({"response":false, "responseString":JSON.stringify(err), "state":"Deprecated!!!! \nPlease use the new API's."});
			} else {
				console.info("updated",rows);
				callbackSuccess({"response":true,"responseString":"Profile updated successfully", "state":"Deprecated!!!! \nPlease use the new API's."});
			}
		});
}

exports.userLogin = function(email, password,callbackSuccess,callbackError){

	 var q="SELECT  * FROM users where Email=? ";
    con.query(q, [email], function (error, rows, fields) { 
	    if(error) {
			callbackError({"response":"error","responseString":"something went wrong when fetch details!!!"});
	    } else {
			if(rows.length ==1) {	
				//console.log("Row is "+rows.length);
				if(sha1(password)==rows[0].Password) {
          
					callbackSuccess({"response":"success","user":rows});
			           
				}
				else
				{
					callbackError({"response":"error","responseString":"Incorrect password"});
				}
		    }else {
				callbackError({"response":"error","responseString":"Incorrect Credentials"});
			}
		}
	});
}








exports.sendPasswordToEmail = function(email,password, name, callbackSuccess, callbackError){
	console.info("sendPasswordToEmail",email,password,name);
	var subject="";

	
	subject = "Your new password for Event App and Network Login";
	
	var emailText = "<p>Dear "+name+",</p>\
					<p>As you requested, your password has now been reset. Your new details are as follows:</p>\
					<p>Username: "+email+"</p>\
					<p>Password: "+password+"</p>\
					<br/>\
					<p>All the best,<br/>\
						Support Team \
					</p>";
					
	client.sendemail({
	   	to: email,
		from: 'manish.kummar21@gmail.com',
		replyTo: 'manish.kummar21@gmail.com',
		subject: subject,
		message: emailText
		}, function (error, data) {
			if(error) {
				console.log("Error is "+JSON.stringify(error));
				console.log(data);
				callbackError({"success":false,"responseString":JSON.stringify(error), "state":"Deprecated!!!! \nPlease use the new API's."});
			}
			else
			{
				callbackSuccess({"success":true,responseString:"Reset password successfully!!!", "state":"Deprecated!!!! \nPlease use the new API's."});
			}
		}
	);
}
