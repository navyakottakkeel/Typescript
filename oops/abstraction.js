"use strict";
/// abstract class based abstraction - partial abstraction /////
class Animals {
}
class Dog extends Animals {
    sound() {
        console.log('Dog barks');
    }
}
const d1 = new Dog();
d1.sound();
class Car {
    start() {
        console.log('car started');
    }
}
const car = new Car();
car.start();
