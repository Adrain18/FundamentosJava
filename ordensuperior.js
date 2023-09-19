//Funciones de Orden Superior
//High Order Functions
/*
   Funciones que reciben funciones 
   como parametros 
*/

const myFunction = () =>{
    console.log('Ejecuta Mi Funcion');
}
myFunction();
const sameFuction = myFunction;
sameFuction();

const otherSameFunction = myFunction;
otherSameFunction ();

const funOne = () =>{
    console.log('Ejecuta funcion One');
}
const funTwo = (username) =>{
    console.log('Ejecuta Funcion Two');
    console.log('Holaa' + username);
}
const funThree = (otherFunction) =>{
    console.log('Inicia funcion3');
    otherFunction();
    console.log('Termina funcion 3');
}

funOne();
funTwo('Edrien');
funTwo('Clark Kent');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));