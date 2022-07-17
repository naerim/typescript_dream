const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  // 만들어진 오브젝트마다 들어있음
  //   this.makeCoffee = (shots) => {
  //     console.log("making...☕️");
  //   };
}
// Prototype member level
// proto안에 들어가 있음
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...☕️");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteeMachine(milk) {
  this.milk = milk;
}
// 상속
LatteeMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteeMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
