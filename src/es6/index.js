function newFunction(name, age, country) {
    var name = name || "Christian";
    var age = age || 23;
    var country = country || "Honduras";

    console.log(name, age, country);
}

//ES6
function newFunction2(name = "Christian", age = 23, country = "Honduras") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Christopher", 10, "Honduras");

// Concatenacion
let hello = "Hello";
let world = "World";
var epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ES6
epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

//MultiLinea
let frase = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, commodi molestias consequatur qui in. Fuga dignissimos consequuntur quod? \n" + "Quam tempora temporibus impedit quos iste perspiciatis perferendis possimus, debitis ullam.";
console.log(frase);

//ES6
let frase2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae, commodi molestias consequatur qui in. Fuga dignissimos consequuntur quod?

Quam tempora temporibus impedit quos iste perspiciatis perferendis possimus, debitis ullam.
`
console.log(frase2);

// Destructuración de elementos:
//Antes los objetos podía ser creados así:
let person ={
    'name':'Christian',
    'nick':'Math',
    'num':'12314125'
};

//Si queríamos llamar  lo que componía ese objeto utilizabamos:
console.log(person.name,person.nick,person.num);

//Ahora con la destrucción de elementos, sucede una especie de resumen, donde se extrae un factor común del nombre del objeto, así:
let {name,nick, num} = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name,nick);

//Operador de prolongación: Permite expandir varios elementos. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.

let devTeam504= ['Angel','Christian','Gersonn'];
let speakers= ['Raymond','Ricardo'];

let conjunto_union=['Aaron',...devTeam504,...speakers]
console.log(conjunto_union);

//Asiganciones mediante let se pueden inicilizar variables  cuyo scope está solo en el bloque de código en el que está llamada, en otras palabras, solo puede existir las variables let dentro de las llaves en que se llaman. Var se seguirá usando para variables globales y locales.
 
{
    var VariableGlobal= "...";
}

{
    let VariableLocal= "***";
    console.log(VariableLocal); // Al estar dentro de las llaves o el bloque de código console se ejecutará con normalidad
}

console.log(VariableGlobal);
console.log(VariableLocal); // Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.

//Const, nos permitirá establecer una variable como una constante, donde el valor declarado no podrá cambiar.

const a = "Soy constante";
a = "No soy constante" ; // Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);
