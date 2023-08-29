const frase = String(prompt("Ingrese un texto"))


function capitalizarPalabra(frase){
    // charAt lo que hace es acceder a la posicion de la letra que queremos
    let primeraPalabra = frase.charAt(0).toUpperCase();

    // slice lo que hace es traer desde una posicion especifica en adelante
    let restoPalabra = primeraPalabra + frase.slice(1)

    return (restoPalabra)
}

console.log(capitalizarPalabra(frase))





