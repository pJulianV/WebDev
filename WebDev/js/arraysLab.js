var myArray = ['E', 'F', 'G'];
var myString = 'Hi';
for (var m in myArray){
    myString = myString + myArray[m];
}
console.log(myString);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // Que es sort?

function agregarElementoArray(){
    let elemento 
    let espacios 
    let array = [];
    espacios = Number(prompt("Ingrese la cantidad de espacios de la array"))
    while (array.length < espacios){
        elemento = prompt("Ingrese un elemento 😶")// Que es array.shift()?
        array.push(elemento)
    }
    alert("Su array: " + array)
}