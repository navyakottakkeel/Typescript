//// Pick - Select only specific properties from a type //////////

interface Products {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const products: Pick<Products, 'name'|'price'> = {
    name: 'Laptop',
    price: 60000,
    // stock: 10
}

console.log(products);