// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects

// Puedes crear funciones asi:
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// o asi que es mas sencillo:
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

// o asi:
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type                 = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str]                 = 'Valor de cadena';
myObj[rand]                = 'Número aleatorio';
myObj[obj]                 = 'Object';
myObj['']                  = 'Incluso una cadena vacía';

console.log(myObj);

// Constructores:

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Para el dueño del carro

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

// Obj rand
var rand = new Person('Rand McKinnon', 33, 'M');
// Obj ken
var ken = new Person('Ken Jones', 39, 'M');

object.methodname(params);
// Copy to Clipboard
// Puedes definir métodos para un tipo de objeto incluyendo una definición del método en la función constructora del objeto. Podrías definir una función que formateé y muestre las propiedades de los objetos del tipo Car previamente definidas; por ejemplo:

function displayCar() {
  var result = `Un hermoso ${this.year} ${this.make} ${this.model}`;
  pretty_print(result);
}
// Copy to Clipboard
// donde pretty_print es una función para mostrar una línea horizontal y una cadena. Observa el uso de this para referirse al objeto al que pertenece el método.

// Puedes hacer de esta función un método de Car agregando la declaración

this.displayCar = displayCar;
// Copy to Clipboard
// a la definición del objeto. Por lo tanto, la definición completa de Car ahora se verá así:

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
// Copy to Clipboard
// Entonces puedes llamar al método displayCar para cada uno de los objetos de la siguiente manera:

car1.displayCar();
car2.displayCar();


// Métodos de Instancia los cuales son tareas
// integradas realizadas por la instancia de un objeto.
// • Métodos Estáticos que son tareas que pueden ser
// llamadas directamente en el constructor de un
// objeto.

// MÉTODOS NUMÉRICOS:
// • parseInt() transforma un string en número entero.
// • parseFloat() hace lo mismo que parseInt pero en
// este caso con un número decimal.

// MÉTODOS PARA ARRAYS:
// • length() Devuelve el número de elementos de una
// lista.
// • join() junta todos los elementos de una lista
// separados por el carácter que indiquemos dentro
// del paréntesis (entre comillas porqué será un
// string).