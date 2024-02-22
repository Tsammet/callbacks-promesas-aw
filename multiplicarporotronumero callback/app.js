function multiplicacionAsincrona(num1, operacionCallBack){
    operacionCallBack(num1)
}

function multiplicar(num1){
    console.log(`el resultado de la multiplicación de ${num1} * 2 es = ${num1 * 2}`)
}

multiplicacionAsincrona(10, multiplicar)