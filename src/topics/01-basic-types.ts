
//Cuando sabemos que un tipo de dato 
//no va a cambiar, usamos const
//Cuando sabemos que un tipo de dato 
//va a cambiar, usamos let
const name = 'Strider';
// Se utiliza | para declar una variable que pueda
//tener más de un tipo de dato.
//let hpPoints: number | string = 95; 
// Tambien podemos declarar solo una palabra aceoptada; 
let hpPoints: number | 'Full' = 95; 

const isAlive: boolean = true;

hpPoints = 'Full'; 
console.log(name, hpPoints, isAlive);

export {

};