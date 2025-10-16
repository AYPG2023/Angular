
export interface Product {
    descripion: string;
    price:number;
}

// objeto tipo Product
const phone: Product = {
    descripion: 'Nokia A1',
    price: 150.00
}

const tablet: Product ={
    descripion: 'iPad Air',
    price: 250.00
}

interface  taxCalcultaionOptions {
    tax:number;
    products: Product[];
}
// function to calculate
function taxCalcultaion(options: taxCalcultaionOptions): [number, number] {

    const {  tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone,tablet]
const tax = 0.12;


const [total, totalTax ] = taxCalcultaion({
    products: shoppingCart,
    tax: tax,
});
//clg
console.log( 'Total', total);
console.log( 'Tax', totalTax);
