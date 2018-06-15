
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (item_id int AUTO_INCREMENT NOT NULL, product_name varchar(50) NOT NULL, department_name varchar(50) NOT NULL, price varchar(30) NOT NULL, stock_quantity int NOT NULL, PRIMARY KEY(item_id));

use bamazon;
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple Watch", "Electronics & Computers", 329.00, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Macbook Pro", "Electronics & Computers", 2000.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Nikon D600", "Electronics & Computers", 2200.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple Earpods", "Electronics & Computers", 179.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Ibuprofen", "Pharmacy, Health & Beauty", 4.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Florastor Probiotic", "Pharmacy, Health & Beauty", 50.00, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Jo Malone Oud & Bergamot", "Pharmacy, Health & Beauty", 130.00, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Maison Margiela Replica Sneakers", "Clothing & Shoes", 470.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Moncler Norbert Down Jacket", "Clothing & Shoes", 1275.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Kenzo Tiger Sweatshirt", "Clothing & Shoes", 270.00, 7);

select * from products;