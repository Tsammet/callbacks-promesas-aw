const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];

const getCliente = (clienteId, callback) => {

    const cliente = clientes.find(c => c.id === clienteId);


    if (cliente){
        callback(null, cliente)
    }else{
        console.log(`El cliente con el id ${clienteId} No existe`)
    }
}

const getProducto = (productoId, callback) => {

    const producto = productos.find(p => p.id === productoId)

    if(producto){
        callback(null, producto)
    }else{
        console.log(`El producto con el id ${productoId} No existe`)
    }

}

const calcularTotalFactura = (productosAr, callback) => {

    const productosPrecio = productos.filter(p => productosAr.includes(p.id) )

    let suma = 0;

    productosPrecio.forEach(element => {
        suma += element.precio;
    });

    if(productosAr){
        callback(null, suma)
    }else{
        console.log(`No hay productos!`)
    }

}



getCliente(1, (err, cliente) => {
    if (err){
        console.log("ERROR")
        return console.log(err)
    }else{
        console.log(`El cliente es ${cliente.nombre}`)
    }
})

getProducto(101, (err, producto) => {
    if(err){
        console.log("ERROR")
        return console.log(err)
    }else{
        console.log(`El producto es ${producto.nombre}`)
    }
})


const arrayprods = [101,102]
calcularTotalFactura(arrayprods, (err, total) => {

    if (err){
        console.log("Error")
        return console.log(err)
    }else{
        console.log(`El total es ${total}`)
    }

})  

const obtenerInformacionFactura = (facturaId, callback) => {

    const factura = facturas.find(f => f.id === facturaId)

    if (factura) {
        const cliente = clientes.find(c => c.id === factura.clienteId);
        const productosFactura = factura.productos.map(pid => {
            return productos.find(p => p.id === pid);
        });

        calcularTotalFactura(factura.productos, (err, total) => {
            if (err) {
                callback(err);
            } else {
                factura.total = total;
                callback(null, {
                    id: factura.id,
                    cliente: cliente.nombre,
                    productos: productosFactura,
                    total: factura.total
                });
            }
        });
    }else{
        console.log(`No existe la factura ${facturaId}`)
    }
}

obtenerInformacionFactura(1002, (err, invoice)=>{
    if (err){
        console.log("Error")
        return console.log(err)
    }else{
        console.log(`La factura es ${invoice.id} El cliente es ${invoice.cliente} Los productos son ${invoice.productos.map(p => p.nombre)} y el total es ${invoice.total}`)
    }
})