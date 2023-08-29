let suma = 0
let n = prompt("Ingrese hasta que numero desea la suma")

function sumarimpares(n, suma){
    for (let i = 1; i <= n; i = i+2) {
        suma = suma + i
    }
   console.log(suma)
}
sumarimpares(n, suma)