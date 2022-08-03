import add from "./10-3-module1.js"; // export default
// 원하는 이름으로 정의해서 쓸 수 있음
console.log(add(1, 2));

import { print } from "./10-3-module1.js";
// default가 아닐때는 이름으로 가져와야함
print();

// 이름 변경해서 가져오려면
import { print as printMessage } from "./10-3-module1.js";
printMessage();

import * as calculator from "./10-3-module1.js";
calculator.print();
calculator.number;
