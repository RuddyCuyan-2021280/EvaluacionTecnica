function mensaje1() {
    console.log("Hola Quel")
}
function mensaje2() {
    console.log("Hola Cuyan")
}
function mensaje3() {
    console.log("Hola Jordy")
}
function mensaje4() {
    console.log("Hola Calixto")
}
function mensaje5() {
    console.log("Hola Luna")
}

const funciones = [mensaje1, mensaje2, mensaje3, mensaje4, mensaje5];

function ejecutarFuncionAleatoria() {
    const mensajeAleatorio = Math.floor(Math.random() * funciones.length);
    const funcionAleatoria = funciones[mensajeAleatorio];
    funcionAleatoria();
}

ejecutarFuncionAleatoria();