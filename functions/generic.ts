function print<T>(value: T): T{
    return value;
}

console.log(print(true));

/////////////////////////////////

class getValue<T>{
    value: T;
    constructor(value: T){
        this.value = value;
    }
}

let numValue = new getValue(10);
console.log(numValue.value);

/////////////////////////////////

interface Box <T>{
    value : T;
}

const numberBox : Box<string> = {
    value:'Navya'
}

console.log(numberBox.value)

//////////////////////////////////////

function printLength <T extends {length: number}>(value: T){
    console.log(value.length);
}

printLength('hello');

///////////////////////////////////////////////

class Boxes<T = string>{
    value : T;

    constructor(value: T){
        this.value = value;
    }
}

const strboxes = new Boxes('Welcome');
console.log(strboxes.value)

////////////////////////////////////////////////

//// reverse an array ///////////

const arr = [4,8,3,7,6];

function reverse<T>(arr: T[]): T[]{
    return arr.reverse();
}

console.log(reverse(arr));

////////////////////////////////////////////////////