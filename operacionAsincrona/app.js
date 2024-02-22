const  operacionAsincrona = (num1, num2, callback) =>{
    setTimeout(() =>{
        callback(num1, num2)
        
    },2000);
}

const suma = (num1, num2) =>{
    console.log(`El resultado de ${num1} + ${num2} es = ${num1 + num2}`)
}


const resta = (num1, num2) => {
    console.log(`El resultado de la resta es = ${num1 - num2}`)
}

const mult = (num1, num2) => {
    console.log(`El resultado de la multiplicación es =  ${num1 * num2}`)
}
operacionAsincrona(5,5, suma)
operacionAsincrona(2,2,resta)
operacionAsincrona(2,2,mult)




