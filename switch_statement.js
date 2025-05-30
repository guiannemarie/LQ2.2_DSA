// SWITCH STATEMENT (Price Inquiry)
// Show menu choices
console.log("A. Pepsi Cola       Php 30.00");
console.log("B. Coca Cola        Php 35.00");
console.log("C. Apple (per kg)   Php 100.00");
console.log("D. Orange (per kg)  Php 120.00");
console.log("E. Hotdogs (per kg) Php 180.00");

// Ask for item choice and quantity
let item_choice = prompt("Enter your item choice (A to E):").toUpperCase();
let qty = parseInt(prompt("Enter quantity:"));

// Variable to store the price
let price = 0;
let item_name = "";

switch (item_choice) {
  case 'A':
    item_name = "Pepsi Cola";
    price = 30;
    break;
  case 'B':
    item_name = "Coca Cola";
    price = 35;
    break;
  case 'C':
    item_name = "Apple";
    price = 100;
    break;
  case 'D':
    item_name = "Orange";
    price = 120;
    break;
  case 'E':
    item_name = "Hotdogs";
    price = 180;
    break;
  default:
    alert("Invalid choice.");
    break;
}

// If a valid item was chosen, show the total cost
if (price > 0) {
  let total = price * qty;
  alert(`You selected ${item_name} x ${qty}\nTotal Price: Php ${total}`);
  console.log(`You selected ${item_name} x ${qty} = Php ${total}`);
}
