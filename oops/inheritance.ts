//// inheritance ///////////////
class Persons{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    greet(){
        console.log('Hello '+ this.name);
    }
}

//// single inheritance ///////////////

class Students extends Persons{
    school: string;

    constructor(name: string, school: string){
        super(name);
        this.school = school;
    }

    study(){
        console.log(`${this.name} studying at ${this.school}`);
    }
}

const std1 = new Students('Navya', 'ABC school');
std1.greet();
std1.study();

/// multilevel inheritance

class Batch extends Students{
    subject: string;

    constructor(name: string, school: string, subject: string){
        super(name,school);
        this.subject = subject;
    }

    print(){
        console.log(`${this.name} from ${this.school} likes ${this.subject}`);
    }
}

const b1 = new Batch('Nythik', 'XYZ School', 'Maths');
b1.greet();
b1.study();
b1.print();

//// hierarchical inheritance ///////////////

class Teachers extends Persons{
    subject: string;

    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }

    view(){
        console.log(`${this.name} teacher takes ${this.subject}`);
    }
}

const tchr1 = new Teachers('Anusha','English');
tchr1.view();
tchr1.greet();