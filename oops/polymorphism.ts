//// compile time polymorphism - method overloading //////////
/// using method////////

class Calculator{
    add(a:number, b: number): number;
    add(a: string, b: string): string
    add(a: any, b: any): any{
        return a + b;
    }
}

const calc = new Calculator();
console.log(calc.add(10,5));
console.log(calc.add('Hello ', 'World'));

//////////////////////////////////////////////////////////
///// using function /////////////

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a:any, b: any): any{
    return a + b;
}

console.log(add(20,5));
console.log(add('Good ', 'Morning'));

////////////////////////////////////////////////////////////////////

/// runtime polymorphism - method overriding //////////////

class Animal{
    sound(){
        console.log('Animal sound');
    }
}

class Cat extends Animal{
    sound(): void {
        console.log('Meow');
    }
}

const cat = new Cat();
cat.sound();

