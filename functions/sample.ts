/// normal/////////
function add(a:number, b:number): number{
    return a + b;
}

console.log(add(5,3))

/// arrow function /////////
const sum = (a: number, b: number): number => a + b;
console.log('Sum : ', sum(10,5));