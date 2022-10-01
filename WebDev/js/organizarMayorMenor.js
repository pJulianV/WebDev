let cantidadNumeros = Number(prompt("¿Cuantos numeros quiere ingresar?"))

function MayoraMenor(cantidadNumeros){
    let numero;
    let array = [];
    for(let i = 0; i < cantidadNumeros; i++){ // Recuerda un let es una variable local (dentro de una funcion en este caso)
        numero = Number(prompt(i+1 + ". Ingrese numero a agregar: "))
        array.push(numero)
    }
    for(let i = 0; i < array.length; i++){
        for (let j = 1; i < array.length; i++){
            if (array[i] < array[j]){
                t == array[i]
                array[i] == array[j]
                array[j] == t
            }
        }
    }
    return "Su lista organizada: " + array
}

alert(MayoraMenor(cantidadNumeros))

