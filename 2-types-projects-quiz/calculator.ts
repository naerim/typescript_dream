/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

/*
function calculate(name:string, num1: number, num2: number): number {
    switch(name) {
        case 'add': return num1 + num2;
        break;
        case 'substract': return num1 - num2;
        break;
        case 'multiply': return num1 * num2;
        break;
        case 'divide': return num1 / num2;
        break;
        case 'remainder': return num1 % num2;
        break;
        default: return num1;
    }
}
*/

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(command: Command, a: number, b: number): number {
    switch(command) {
        case 'add': 
            return a + b;
        case 'substract': 
            return a - b;
        case 'multiply': 
            return a * b;
        case 'divide': 
            return a / b;
        case 'remainder': 
            return a % b;
        default: 
            throw new Error('unkown command');
    }
}