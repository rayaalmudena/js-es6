// Método de array map es ampliamente usado en React para renderizar HTML.
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/react/react_es6_array_methods.asp

// A) Usa la función map para restar uno a todos los números del array

let numeros = [1, 2, 3];
minusOne = (num) => num-1;
let nuevoArray = numeros.map(minusOne);
console.log("Apartado A: ", nuevoArray); // [0 , 1, 2];

// B) Usa la función map para transformar a mayúsculas todos los strings de este array
let animales = ["vertín, bigotes"];
uppercase = (word) => word.toUpperCase();
let nuevosAnimales = animales.map(uppercase); // TODO
console.log("Apartado B: ", nuevosAnimales) // ["VERTÍN, BIGOTES"]


// C) Usa la función map para actualizar con la fecha de hoy (new Date().toLocaleString()) la propiedad ultimaVisita de todos los pacientes de una clínica dental

let pacientes = [{
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19'
}];
function changeDate(paciente){
    paciente.ultimaVisita=new Date().toLocaleString();
    return paciente;
}
let pacientesVisitados = pacientes.map(changeDate); // TODO
console.log("Apartado C: ", pacientesVisitados); // La propiedad 'ultimaVisita' de TODOS los pacientes debe estar actualizada a fecha de hoy

// D) DIFÍCIL. Usa la función map para AGREGAR un nuevo campo al array de pacientes. El campo debe llamarse 'avisos'. Si el paciente NO ha pagado la última visita, dicho campo debe contener el string 'Paciente moroso, cobrar!'; en caso contrario, debe dejarse vacío. BONUS: usa un condicional ternario. BONUS: Usa el operador ...object para no tener que escribir todos los campos.
function morosos(paciente){
    paciente.ultimaVisitaPagada ? paciente["avisos"]="": paciente["avisos"]="Paciente moroso, cobrar!";
    return paciente;  
} 
let pacientesAvisos = pacientes.map(morosos); // TODO
console.log("Apartado D: ", pacientesAvisos);
/**
 * {
    nombre: "Pedro",
    ultimaVisitaPagada: false,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: 'Paciente moroso, cobrar!'
}, {
    nombre: "María",
    ultimaVisitaPagada: true,
    ultimaVisita: '4/4/2022 18: 32: 19',
    avisos: ''
}
 */


// E) Usa la función map para crear tantos tags <li> como pacientes hay en el array
lista = (paciente) => "<li>"+paciente.nombre+"</li>"
let pacientesLista=pacientes.map(lista); // TODO
console.log("Apartado E: ", pacientesLista);

/**
 * ['<li>Pedro</li>', '<li>María</li>']
 */



