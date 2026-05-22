class Student{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hello ', this.name);
    }
}

const s1 = new Student('Navya', 28);
// s1.name = 'Navya';
// s1.age = 28;
 s1.greet();

//////////////////////////////////////////

class Users{
    firstName: string;
    lastName: string;
    age: number;

    constructor(fname: string, lname: string, age: number){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }

    greetUser(){
        console.log('Hello '+ this.firstName +' '+ this.lastName)
    }
}

const users1 = new Users('John','Doe',25);
const users2 = new Users('James','Smith',30);

users1.greetUser();

//////////////////////////////////////////////////////////////////////

class Customer extends Users{
    city: string;

    constructor(fname:string,lname:string,age:number,city: string){
        super(fname,lname,age);
        this.city = city;
    }

    greetCustomer(){
        console.log(`i am ${this.firstName} from ${this.city}`)
    }
}

const c1 = new Customer('Navya','K',28,'Kannur');
c1.greetCustomer();

////////////////////////////////////////////////////////////////////

////// using static ///////////////////
class Teacher{
    static school = 'ABC School';
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const t1 = new Teacher('Navya');
console.log(t1.name);
console.log(Teacher.school)

//////////////////////////////////////

////// using getter and setter //////////////

class Person{
    private _name: string = '';

    get name(){
        return this._name;
    }

    set name(value: string){
        if(value.length > 3){
            this._name = value;
        }else{
            console.log('Name must have more than 3 characters');
        }
    }
}

const p1 = new Person();
console.log(p1.name);
p1.name = 'Nandana';
console.log(p1.name);

//////////////////////////////////////////////////////////////////////////

