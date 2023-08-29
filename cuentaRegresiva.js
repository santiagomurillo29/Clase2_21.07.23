function crearCuentaRegresiva(numero){
    let array = []

    for (let i = numero; i >= 0; i--){

        array.push(i)
    }
    return array
}

alert(crearCuentaRegresiva(5))