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
var stopApp = function(){
    return next(err);
}

var beginApp = function(){
    connection.query("SELECT * FROM Products", function(err, result){
        if (err) throw err;
        return (getBamazonProducts(result));
    });
}



var getBamazonProducts = function(products){
    console.log("Displaying the current products, stock, and prices at Bamazon");
    for (var i = 0; i < products.length; i++){
    var productResult = "\r\n"+
    "Item ID: " + products[i].item_id+"\r\n"+
    "Product Name: " + products[i].product_name+"\r\n"+
    "Department: " + products[i].department_name+"\r\n"+
    "Price: " + products[i].price+"\r\n"+
    "Current Stock: " + products[i].stock_quantity+"\r\n"+
    console.log(productResult);
    }
//userSelectID();
}

var userSelectID = function(){
    prompt.start();
    console.log("Enter the ID of the product you would like to buy");

    prompt.get(schema, function (err, result){
        if (err){
            console.log(err)
        }

    var userChoiceID = parseint(result.ID);
    var userChoiceHowMany = parseInt(result.howMany);

    var checkInventory = function(){
        connection.query('SELECT * FROM products WHERE item_id =' + userChoiceID, function(err, result){
            if(err) throw err;

        var userWants = userChoiceHowMany;
        var productInventory = result[0].stock_quantity;
        var productPrice = result[0].price;
        var isInStock = productInventory - userWant;
        var totalCost = productPrice * userWants;

        if (userWants > productInventory || productInventory === 0){
            console.log("There is not enough stock to complete your request");
            userSelectID();
        } else {
            console.log("There are "+result[0].stock_quantity+" of "+result[0].product_name);
            console.log("You are purchasing "+ userWants +" "+result[0].product_name+"s at $"+ result[0].price+" per item.");
            console.log("Your total is $"+totalCost);
            connection.query('UPDATE products SET stock_quantity = '+isInStock+' WHERE item_id ='+userChoiceID, function(err, result){
                if (err) throw err;
                connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id ='+userChoiceID, function(err,result){

                });
            });
            prompt.get(schema2, function(err, result){
                if (err){
                    console.log(err)
                }
                console.log(result);
                var userAnswer = result.AnotherPurchase;
                if (userAnswer === 'n' || userAnswer === 'no'){
                    stopApp();
                }else {
                    beginApp();
                }
            });
        }
        });
    };
    checkInventory();
    });
}