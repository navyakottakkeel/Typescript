interface User3 {
    name: string;
    age: number;
    city: string;
}

const user3: Readonly<User3> = {
    name: 'Navya',
    age: 28,
    city: 'Kannur'
};

// user3.age = 30;

console.log(user3);

////////////////////////////////////////



