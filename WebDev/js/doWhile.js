let input

function doWhile(){
    do{
        input = Number(prompt("Ingrese un numero y se multiplicara por el siguiente"))
    }while(input != null)
}

function whileButNot(){
    let sum = 1
    input = Number(prompt("Ingrese un numero, (El programa se parara si escribe 0)"))
    while(input !== 0){
        sum /= input
    }
}