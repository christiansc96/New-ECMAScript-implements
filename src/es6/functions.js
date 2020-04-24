//Propiedad de objetos mejorada.
let name = "Christian";
let nick = "DevChris";

//ES5
person = { name: name, nick: nick };

//ES6
ObjES6 = { name, nick }; 
//Nos permite ahorrar código para objetos muy grandes.
console.log(ObjES6);



//ArrowFunction
const names = [
    { name: "Christian", nick: "DevChris" },
    { name: "Fernando", nick: "mister" }
]

//Antes se iteraba mediante map y se usaban funciones anónimas.
let lista = names.map(function (item) {
    console.log(item.names);
})

//Ahora esta función anónima se reemplaza por => un arrow, flecha que apunta a.
//ES6
let listaES6 = names.map(item => console.log(item.names)); {
}

const listaES6_const = (name, nick) => {
    console.log(name);
}

const listaES6_const_único_elemento = name => {
    console.log(name);
}

const square = num => num * num; // Se evita el uso de return.

// Promesas, sirven para trabajar el asincronismo y hacer peticiones a una API. 
//Cómo su nombre indica dice que algo va a suceder.
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resuelto');
        } else {
            reject('Rechazado');
        }
    })
}

helloPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error));