//// encapsulation using method /////////////
class BankAccount{
    private balance: number = 500;

    deposit(amount: number){
        if(amount > 0){
            this.balance += amount;
        }
    }

    getbalance(){
        return this.balance;
    }
}

const acc1 = new BankAccount();
acc1.deposit(1000);
console.log(acc1.getbalance())

//////// encapsulation using getter / setter ///////////////

class Usr{
    private _age: number = 0;

    get age(){
        return this._age;
    }

    set age(value: number){
        if(value > 0){
            this._age = value;
        }
    }
}

const u1 = new Usr();
u1.age = 19;
console.log(u1.age)
