// Versión inicial
function saludar(nombre) {
    console.log("Hola " + nombre);
}

const nombre = process.argv[2];

saludar(nombre);
