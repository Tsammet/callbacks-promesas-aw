const searchElement = (array, element, callback) => {
    callback(array, element)
}

const searchCallback = (array, element) => {
    let encontrado = false;
    for (let object of array) {
        if (object === element) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {

        console.log(`El elemento ${element} Si se encuentra en el array`)
    } else {
        console.log(`El elemento ${element} no se encuentra en el Array`)
    }
}

// También se puede hacer de esta manera con el elemento INCLUDES

// const searchCallback = (array, element) => {
//     if (array.includes(element)){
//         console.log(`El elemento ${element} Si se encuentra en el array`)
//     }else{
//         console.log(`El elemento ${element} no se encuentra en el Array`)
//     }
// }

const instruments = ["Guitar", "Piano", "Oboe", "Violín"]

searchElement(instruments, "Piano", searchCallback)