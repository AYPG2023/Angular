
interface Product {
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
function taxCalcultaion(options: taxCalcultaionOptions): number[] {

    let total = 0;
    options.products.forEach( product => {
        total += product.price;
    });

    return [total, total * options.tax];
}



const shoppingCart = [phone,tablet]
const tax = 0.12;


const result = taxCalcultaion({
    products: shoppingCart,
    tax: tax,
});
//clg
console.log( 'Total', result[0]);
console.log( 'Tax', result[1]);
export {};//Desestructuracion en funciones