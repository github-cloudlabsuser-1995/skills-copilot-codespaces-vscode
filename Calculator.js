const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            console.error("Error: Cannot divide by zero");
            return undefined;
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter calculation: ', (input) => {
    const inputArray = input.match(/(-?\d+)\s*([-+*/])\s*(-?\d+)/);
    if (!inputArray) {
        console.log('Invalid input format. Please enter numbers and an operator without spaces.');
        rl.close();
        return;
    }
    const [, a, operator, b] = inputArray;
    const calculator = new Calculator();
    
    switch (operator) {
        case '+':
            result = calculator.add(Number(a), Number(b));
            break;
        case '-':
            result = calculator.subtract(Number(a), Number(b));
            break;
        case '*':
            result = calculator.multiply(Number(a), Number(b));
            break;
        case '/':
            result = calculator.divide(Number(a), Number(b));
            break;
        default:
            console.log('Invalid operator. Only +, -, *, and / are supported.');
            rl.close();
            return;
    }

    console.log(`Result: ${result}`);
    rl.close();
    result = null;
});
