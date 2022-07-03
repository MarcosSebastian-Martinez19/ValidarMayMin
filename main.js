// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
// sólo por minúsculas o por una mezcla de ambas.

let palabra = prompt("Ingrese una palabra")

function validarMayusMinus(texto) {
    if(texto === texto.toUpperCase()) {
        alert("El texto está formado solo por mayúsculas")
    } else if(texto === texto.toLowerCase()) {
        alert("El texto está formado solo por minúsculas.")
    } else {
        alert("El texto está formado por minúsculas y mayúsculas.")
    }
}

validarMayusMinus(palabra)