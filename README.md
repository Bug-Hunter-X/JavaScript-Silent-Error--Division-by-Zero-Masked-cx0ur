# JavaScript Silent Error: Division by Zero Masked

This repository demonstrates a common, yet subtle bug in JavaScript related to division by zero.  The function `myFunc` attempts to handle division by zero by returning 0 if either input is 0.  While this prevents a runtime error, it masks a potential problem that might not be immediately apparent.

The intended behavior is to have an explicit error when attempting division by zero, facilitating better debugging and error handling.

## Bug Description
The provided `bug.js` file contains a function `myFunc` that silently returns 0 when dividing by zero, rather than throwing an error. This prevents the program from crashing but can lead to unexpected results and make it more difficult to detect the source of errors.

## Solution
The `bugSolution.js` file demonstrates the corrected version of `myFunc` that properly throws an error when division by zero occurs.