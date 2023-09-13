//Odtener referencias a los elementos HTML
const num1 = doocment.getElemetById('num1');
const num2 = doocment.getElemetById('num2');
const result = doocment.getElemetById('Resultado');

//Funcion para obtener los valores de entrada

const getValues = () => {
    const numero1 = Number(num1.value)|| 0;
    const numero2 = Number(num2.value)|| 0;
    return[numero1, numero2];
}
//Funcion para realizar la suma
const sumar = () => {
    const valores = getValues();
    result.value= valores[0] + valores[1];
}
//Funcion para realizar la resta
const restar = () => {
    const valores = getValues();
    result.value = valores[0] - valores[1];
}
//Funcion para realizar la multiplicacion
const multiplicar = () => {
    const valores = getValues();
    result.value= valores[0] * valores[1];
}
//Funcion para realizar la division
const dividir = () => {
    const valores = getValues();
    if (valores[1 !== 0]){
        result.value = valores[0] / valores[1];
    }else{
        result.value = "Error: divicion por cero";
    }
}

const limpiar = () => {
    num1.value = '';
    num2.value = '';
    result.value = '';
}
