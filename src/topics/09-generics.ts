/// Generics: Permiten crear componentes reutilizables que funcionan con una variedad de tipos de datos.
// Hay que procurar no usar 'any', ya que se pierde la información de tipos.

export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
