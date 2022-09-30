
function saludo(){
    let nombre;
    let edad;
    nombre = prompt('Ingrese su nombre:');
    edad = prompt('Ingrese su edad:');
    document.write('Hola ');
    document.write(nombre);
    document.write(' asi que tienes ');
    document.write(edad);
    document.write(' años');
}

function decicion(){
    let numero;
    numero = Number(prompt('¿Que prefieras?: \n 1) Tener mas tiempo 2) Tener mas dinero 🤔'));
    if (numero === 1){
        alert("Prefieres mas tiempo.") 
        alert("Bien.")
        alert("Es lo que yo eligiria")
    }else if(numero !== 1){
        alert("Vale")
        alert("Prefieres mas dinero")
        alert("Esta bien")
    }
}