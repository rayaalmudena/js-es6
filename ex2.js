
// Uso adecuado de let y scope para actualizar una variable

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = true;
edad = 17;

if (edad >= 18) {
    let puedesPasar = false;
}

console.log(puedesPasar) // false

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?

//primero no entra al if porque edad no es as grande o igual a 18 y porque la variable puedesPasar se declara dos veces, fuera y dentro del if

let puedesPasar2 = true;
edad = 18;

if (edad >= 18) {
     puedesPasar2 = false;
}

console.log(puedesPasar2) // false