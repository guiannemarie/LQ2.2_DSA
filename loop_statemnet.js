// LOOP STATEMENT
// Ask the user for the breed and how many times to print
let dog_breed = prompt("Enter the dog breed:");
let print_count = parseInt(prompt("How many times to print the breed?"));

// Loop to print the breed multiple times in the console
for (let i = 0; i < print_count; i++) {
  console.log(`${i + 1}: ${dog_breed}`);
}
