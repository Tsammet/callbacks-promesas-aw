const sumaElementos = (listaNums, callback) => {
    callback(listaNums)
}


const callBackSumaElementos = (listaElementos) => {
    let suma = 0;
    for (i = 0; i < listaElementos.length; i++){
        suma += listaElementos[i];
    }
    
    console.log(`La suma de todos los elementos de la lista de de ${suma}`)
    
}

// También se puede de esta manera

// const callBackSumaElementos = (listaElementos) => {
//     let suma = 0;
//     listaElementos.forEach(element => {
//         suma += element 
//     })
    
//     console.log(`La suma de todos los elementos de la lista de de ${suma}`)
    
// }

listaNums = [1,2,3,4,5,6,7,8,9,10]
sumaElementos(listaNums, callBackSumaElementos)