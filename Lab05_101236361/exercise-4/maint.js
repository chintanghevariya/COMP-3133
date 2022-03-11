"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var customer = new customer_1.Customer("john", "patel", 25);
customer.greeter();
console.log("Age : " + customer.GetAge());
