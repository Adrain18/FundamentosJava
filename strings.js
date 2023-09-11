// String en Javascript

let miString = "Este Es uN TeXtO" + 'de PrUeBa';
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase);
console.log(miString.toUpperCase);



console.log("1`m Frank");

console.log('i\'m frank');

//String Multilinea
const menu =`
1- Opcion 1
2- Opcion 2
3- Opcion 3
`;

console.log(menu);

//String Templates
//placeholder ${}

const name = 'jaco';
const superhero = 'Spiderman';
const age = 20;

console.log("Soy" + name + "soy" + superhero + 'y tengo' + age + 'anos');
console.log(`Soy ${name } soy $ {superhero } y tengo ${age} + anos`);
