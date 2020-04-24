//Clases son una forma de manejar herencias dentro de JS y manejar POO.
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    //Se pueden añadir más métodos  por bloques de código.
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Import y exports
import { hello } from './module';
hello();

//Generators: Es uan función especial que retorna una serie de valores según un algoritmo definido. EL asterisco significa generator

function* helloWorld() {
    if (true) {
        yield 'Hello, '//Guarda el estado de forma interna
    }
    if (true) {
        yield 'World '//El segundo valor es llamado cuando se ejecuta el siguiente valor
    }

};

const generatorHello = helloWorld();
//Luego puedo utilizar valor next, ejecuto lógica, y al ejecutar el siguiente next se meustra el segundo valor, hasta n next.

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Al no tener ningún valor en el siguiente next, al ejectuar muestra un "Undefined".