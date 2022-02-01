let result;

function calc(operator, a, b) {
  const isNotCorrect = (!a || !b || !operator
    || typeof a !== "number" || typeof b !== "number");

   const operations = {
        sum: (a + b),
        sub: (a - b),
        mult: (a * b),
        div: (a / b),
        exp: (a ** b),
    }

    if (isNotCorrect) {
       return "Error";
    } else if (operator in operations) {
        return operations[operator];
    } else {
        return "Unknown operator";
    }
}

console.log( calc("mult", 4, 5) );
console.log( calc("sum", 5) );
console.log( calc("nuude", 6, 7) );
console.log( calc("div", 3, true) );