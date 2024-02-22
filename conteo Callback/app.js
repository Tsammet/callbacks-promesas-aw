const conteo = (frutas, callback) =>{
    callback(frutas)
}

fruits = ["manzana", "piña","pera","uvas"]

const conteoCallback = (frutas) =>{
    let suma = 0;
    frutas.forEach(fuits => {
        suma ++;
    });
    console.log(`la suma de las frutas que están ahí son de ${suma}`)
}

conteo(fruits, conteoCallback)