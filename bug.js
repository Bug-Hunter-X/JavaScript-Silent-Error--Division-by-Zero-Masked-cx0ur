function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is the problematic line
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Throws an error
console.log(myFunc(0, 5)); // Throws an error