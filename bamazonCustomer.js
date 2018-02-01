var mysql = require("mysql");
var prompt = require("prompt");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if(err){
      console.log('Not connecting, try again');
      return;
  }
      console.log('Congrats, you connected');

var schema = {
    properties: {
        ID: {
        message: "Enter the ID of the product you would like to buy.",
        pattern: /^[0-9][0-9]$|^[0-9]$/,
        required: true
        },
        howMany: {
        message: "Enter how many items you would like to buy.",
        pattern: /^[0-9][0-9]$|^[0-9][0-9][0-9]$/,
        required: true
        }
    }
};

var schema2 = {
    properties: {
        AnotherPurchase: {
        message: "Would you like to buy another item?.",
        pattern: /(no|n|yes|y)/,
        required: true
        },
    }
}
});
