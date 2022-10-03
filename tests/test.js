let prueba = ["5"];

let igual = ["1", "5", "10", "25", "5", "50", "100", "5"].filter(
  (element) => element == prueba
);
console.log(igual);

console.log(igual.length);

if (prueba != igual) {
  console.log("true");
} else {
  console.log("false");
}

/* .reduce((acc, el) => acc + el, 0); */

let numeros = [[1], [10, 5], [5], [1]];

let suma = numeros.reduce((acc, el) => acc.concat(el), []);
console.log(suma);

suma.reduce((acc, el) => acc + el, 0);

console.log(suma.reduce((acc, el) => acc + el, 0));
