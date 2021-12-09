/**
 * Let's make a game 🕹
 */

const position = {x: 0, y: 0};
function move(direction: 'up' | 'down' | 'left' | 'right') {
    switch (direction) {
        case 'up':
            position.y += 1;
            break;
        case 'down':
            position.y -= 1;
            break;
        case 'left':
            position.x -= 1;
            break;
        case 'right':
            position.x += 1;
            break;
        default:
            throw new Error(`unkosn direction: ${direction}`);
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

/*
let position: Result = { x: 0, y: 0 };
type Result = {x: number, y: number};
type Direction =  'up' | 'down' | 'left' | 'right';
function move(direction: Direction): Result {
    position = {x: 0, y: 0};
    switch(direction) {
        case 'up':
            position.y += 1;
        case 'down':
            position.y -= 1;
        case 'left':
            position.x -= 1;
        case 'right':
            position.x += 1;
        default:
            throw new Error;
    }
    return position;
}
*/

