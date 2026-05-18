////// Required - makes all properties required /////////////

type User1 = {
    name?: string;
    age?: number;
    city?: string;
}

function updateUser1(user: Required<User1>){
    console.log(user);
}

updateUser1({
    name: 'Anusha',
    age: 30,
    city: 'Kannur'
})

/////////////////////////////////////////////

interface User2 {
    name?: string;
    age?: number;
    city?: string;
}

const user2: Required<User2> = {
    name: 'Nithin',
    age: 33,
    city: 'Kannur'
}

user2.age = 35;

console.log(user2);