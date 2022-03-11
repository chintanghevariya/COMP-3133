import { Customer } from "./customer";

let customer = new Customer("john","patel",25);
customer.greeter();
console.log("Age : " + customer.GetAge());
