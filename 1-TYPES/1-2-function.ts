{
    // JavaScript π©
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript β¨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript π©
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TypeScript β¨
    function fetchNum(id : string): Promise<number>{
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // JavaScript β¨ => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // κ°―μμ μκ΄μμ΄ λμΌν νμ κ°μ Έμ€κ³  μΆμ λ
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4, 5));
}