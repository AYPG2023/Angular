

interface SuperHero {
    name: string;
    age: number;
    addres: Address;
    showAddress: () => string;
}

interface Address {
    street:string;
    country:string;
    city:string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    addres: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.age + ', ' + this.addres.city + ', ' + this.addres.country;
    }
}

const address = superHeroe.showAddress();
console.log({ address });



export {};