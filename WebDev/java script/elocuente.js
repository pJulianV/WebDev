// Sumar los numeros anteriores
let total = 0, cuenta = 1;
while (cuenta <= 10){
    total += cuenta;
    cuenta += 1;
}
console.log(total)


function factorial(number){
    if (number == 0){
        return 1;
    }else {    
        return factorial(number - 1)* number;
    }
}
    
console.log(factorial(3));

console.log("Linea 1 \nLinea 2")


function calculadora(number1, symbol ,number2){
    if (symbol == "+"){
        result = number1 + number2;
    }else if (symbol == "-"){
        result = number1 - number2;
    }else if (symbol == "*"){
        result = number1 * number2;
    }else if (symbol == "/"){
    result = number1 / number2;
    }else if (symbol == "%"){
        result = number1 + number2;
    }else{
        resul = "Enter a valid value pls"
    }
    return result
}

console.log(calculadora(9, "-", 2))

console.log("5" - 1 )

console.log((3>2) || (3<2))

console.log(true == 0)


// Check if a number have a real value 

function realNumber(num){

    if (num == (0 != num)){
        return num + " isn't a valid value"
    }else{
        return num + " is a valid value"
    }
}
console.log(realNumber("hola"))

console.log(Math.max(0, 4))

let elNumero = Number(prompt("Elige un numero"));
    if (!Number.isNaN(elNumero)) {
        console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
}