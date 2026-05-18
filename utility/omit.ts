/// Omit - Remove specific properties ////////////

interface User4 {
    name: string;
    age: number;
    city: string;
    password: number;
}

const user4: Omit<User4, 'password'> = {
    name: 'Navya',
    age: 28,
    city: 'Kannur',
    // password: 1234
}

console.log(user4);