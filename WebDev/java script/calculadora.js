function calculator(operationStr){
    operationStr = operationStr.split(" ").join("");
    operationStr = operationStr.split("");
    for (let i = 0; i > operationStr.length; i++){
        let operation = operation + parseInt(operationStr[i]);
    }
}

console.log(calculator("hola"));
    