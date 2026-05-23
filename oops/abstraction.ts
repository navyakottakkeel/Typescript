/// abstract class based abstraction - partial abstraction /////
abstract class Animals{
    abstract sound(): void;
}

class Dog extends Animals{
    sound(): void {
        console.log('Dog barks')
    }
}

const d1 = new Dog();
d1.sound();

//// interface based abstraction - full abstraction ///////

interface Vehicle{
    start(): void;
}

class Car implements Vehicle{
    start(): void {
        console.log('car started');
    }
}

const car = new Car();
car.start();