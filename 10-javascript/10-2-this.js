console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // Window
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter
// const caller = counter.increase;
// caller(); // undefined
const caller = counter.increase.bind(counter);
caller(); // Counter

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
// 자바스크립트의 this는 마치 지니같음!
// 정보 잃어버리지 않으려면 bind 사용하기
