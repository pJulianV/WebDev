function invertirPalabra(){
    let palabra;
    let palabraFinal = "";
    palabra = prompt("Ingrese una palabra");
    for (let letra in palabra){
        palabraFinal = palabra[letra] + palabraFinal;
    }
    alert(palabraFinal);
}