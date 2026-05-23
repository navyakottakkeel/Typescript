"use strict";
//// compile time polymorphism - method overloading //////////
/// using method////////
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.add('Hello ', 'World'));
function add(a, b) {
    return a + b;
}
console.log(add(20, 5));
console.log(add('Good ', 'Morning'));
////////////////////////////////////////////////////////////////////
/// runtime polymorphism - method overriding //////////////
class Animal {
    sound() {
        console.log('Animal sound');
    }
}
class Cat extends Animal {
    sound() {
        console.log('Meow');
    }
}
const cat = new Cat();
cat.sound();
