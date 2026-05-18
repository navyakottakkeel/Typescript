////////// Utility Types //////////////

////// Partial - makes all properties optional /////////////

type User = {
    name: string;
    age: number;
    city: string;
}

function updateUser(user:Partial<User>) {
    console.log(user);
}

updateUser({
    name: 'Navya',
    age : 28,
})

////////////////////////////////

interface Users {
    name: string;
    age: number;
}

const newUser: Partial<Users> = {
    name : 'Nythik',
}

console.log(newUser)

////////////////////////////////////////////////////////////////
//////// required ///////////////////////

type Product = {
    id?: number;
    name?: string;
    stock?: number;
}

function updateProduct(product: Required<Product>){
    console.log(product);
}

updateProduct({
    id: 3,
    name: 'Laptop',
    stock: 10
})