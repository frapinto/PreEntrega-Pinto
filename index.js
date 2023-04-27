alert("Ingrese la opción de los productos que desea llevar, para salir ingrese 0")
let productoSeleccionado = Number(prompt("1-Zapatilla $25000 2-Remera $5000 3-Jean $20000"))
let cantidadSeleccionada;
let total = 0;

const cantidad = (x, y) => {
    return x * y
}

while (productoSeleccionado != 0) {
    switch (productoSeleccionado) {
        case 1:
            cantidadSeleccionada = prompt("Usted ha seleccionado zapatilla, indique cuantos desea...")
            total += cantidad(cantidadSeleccionada, 25000)
            break;
        case 2:
            cantidadSeleccionada = prompt("Usted ha seleccionado remera, indique cuantos desea...")
            total += cantidad(cantidadSeleccionada, 5000)
            break;
        case 3:
            cantidadSeleccionada = prompt("Usted ha seleccionado Jean, indique cuantos desea...")
            total += cantidad(cantidadSeleccionada, 20000)
            break;

        default:
            break;
    }
    productoSeleccionado = Number(prompt("1-Zapatilla $25000 2-Remera $5000 3-Jean $20000"))
}

alert("El total de su compra es de: " + total)


const envio = function () {
    if (total >= 30000) {
        alert("Gracias por su compra! Por su compra mayor a $30000 el envio le resulta gratis")
    } else {
        total += 1200
        alert("El costo de envio es de 1200, el total es: " + total)
    }
}
