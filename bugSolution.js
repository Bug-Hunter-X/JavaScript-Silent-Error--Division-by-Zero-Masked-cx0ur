function myFunc(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Throws an error: 'Division by zero'
console.log(myFunc(0, 5)); // Returns 0
console.log(myFunc(10,2)); // Returns 5