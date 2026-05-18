type Person = {
    name: string;
    id: number;
    dob: string;
    address: {city: string, country: string}
}
const person: Person = {
    name: 'Bnoi',
    id: 2,
    dob: '26-04-2022',
    address: {
        city: 'Bangalore',
        country: 'India'
    }
}

person.id = 3;
console.log(person);

type Product = {
    Name: string,
    Price: number,
    Quantity: number
}
const product: Product = {
    Name: 'Laptop',
    Price: 100000,
    Quantity: 5
}

let calculateCost = (product: Product): number => {
    return product.Price * product.Quantity;
} 

console.log(calculateCost(product));