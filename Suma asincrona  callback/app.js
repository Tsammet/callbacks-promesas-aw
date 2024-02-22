function sumaAsincrona(num1, num2, sumacallback){
    sumacallback(num1, num2);
}

function suma(num1, num2){
    console.log(`El resultado de ${num1} + ${num2} es = ${num1 + num2}`)
}

sumaAsincrona(10,10,suma)