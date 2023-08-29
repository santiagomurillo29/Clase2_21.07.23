let num = parseInt(prompt("Ingrese el numero"));
let numeros = [5, 7, 12, 34, 54, 2];

function indice(num, numeros){
    for(let i=0; i < numeros.length; i++){
        if (num === numeros[i]){
            hola = true;
            alert("La posicion de su numero es "+ i);
        }
        else{
            alert("no lo encontro")
            break;
        }
    }
}
indice(num, numeros);
