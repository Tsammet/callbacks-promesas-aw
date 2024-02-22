// AQUÍ DECLARO LA FUNCIÓN MAIN 
function filtrar(numeros, paresCallBack){
    paresCallBack(numeros)
}

// ESTE ES MI CALLBACK
function pares(numeros){
    // LO QUE HAGO AQUÍ ES FILTRAR LA LISTA  PARA CREAR UNA NUEVA LISTA DE LOS PARES CON EL METODO FILTER CON UNA FUNCIÓN DE FLECHA
    const evenNumber = numeros.filter(num => num % 2 === 0)
    console.log(evenNumber)
}

nums = [1,2,3,4,5,6,7,8,9,10]
filtrar(nums, pares)