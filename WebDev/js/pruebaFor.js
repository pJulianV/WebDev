function sumaIndefinida(){
    let sum = 0;
    let cantitadNumeros;
    let numeroTemporal;
    cantitadNumeros = Number(prompt("Ingrese cuantos numeros quiere ingresar:"))
    for(let i = 0; i < cantitadNumeros; i++){
        numeroTemporal = Number(prompt(i + ". Ingrese numero para sumarlo"))
        sum += numeroTemporal
    }
}