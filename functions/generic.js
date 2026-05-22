"use strict";
function print(value) {
    return value;
}
console.log(print(true));
/////////////////////////////////
class getValue {
    constructor(value) {
        this.value = value;
    }
}
let numValue = new getValue(10);
console.log(numValue.value);
const numberBox = {
    value: 'Navya'
};
console.log(numberBox.value);
//////////////////////////////////////
function printLength(value) {
    console.log(value.length);
}
printLength('hello');
///////////////////////////////////////////////
class Boxes {
    constructor(value) {
        this.value = value;
    }
}
const strboxes = new Boxes('Welcome');
console.log(strboxes.value);
////////////////////////////////////////////////
//// reverse an array ///////////
const arr = [4, 8, 3, 7, 6];
function reverse(arr) {
    return arr.reverse();
}
console.log(reverse(arr));
////////////////////////////////////////////////////
