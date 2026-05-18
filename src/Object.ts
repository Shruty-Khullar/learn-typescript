const person1:{
    name: string;
    id: number;
    dob: string;
    address: {city: string, country: string}
} = {
    name: 'Shruty',
    id: 1,
    dob: '26-04-2001',
    address: {
        city: 'Bangalore',
        country: 'India'
    }
}
console.log(person1);
//gives error - type is inferenced
// person1.name = 123

//we have to repeat the types again of same properties. Fix - use type alias
const person2:{
    name: string;
    id: number;
    dob: string;
    address: {city: string, country: string}
} = {
    name: 'Bnoi',
    id: 2,
    dob: '26-04-2022',
    address: {
        city: 'Bangalore',
        country: 'India'
    }
}