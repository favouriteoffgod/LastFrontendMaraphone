let result;

function calc(operator, a, b) {
  const isNotCorrect = (!a || !b || !operator
    || typeof a !== "number" || typeof b !== "number");

    if (isNotCorrect) {
        result = "Error";
    } else {
        switch (operator) {
            case "sum":
                result = a + b;
                break;
            case "sub":
                result = a - b;
                break;
            case "multi":
                result = a * b;
                break;
            case "div":
                result = a / b;
                break;
            case "exp":
                result = a ** b;
                break;
            
            default: 
                result = "Unknown operation";
                break;
        }
    }
    return result;
}

console.log( calc("multi", 4, 5) );
console.log( calc("sum", 5) );
console.log( calc("nuude", 6, 7) );
console.log( calc("div", 3, true) );