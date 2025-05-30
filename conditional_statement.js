// CONDITIONAL STATEMENT
// Ask user for username and password
let user_name = prompt("Enter your username:");
let user_password = prompt("Enter your password:");

// Predefined valid password
let password = "12345";

// Check if the entered password matches the stored one
if (user_password === password) {
  alert(`Welcome ${user_name}`);
} else {
  alert("Maybe Username or Password is Invalid or Does not Match");
}
