import { taxCalcultaion, type Product} from "./06-function-destructuring";

const shoppingCart : Product [] = [

    {
        descripion: 'Nokia',
        price:100
    },
    {
        descripion: 'iPad',
        price:150
    },
];

const [total, taxt] = taxCalcultaion({
    products: shoppingCart,
    tax:0.15
}); 

console.log('Total', total);
console.log('Tax', taxt);



















export {};