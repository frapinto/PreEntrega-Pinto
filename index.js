
alert("Ingrese la opción de los productos que desea llevar, para salir ingrese 0");
let productoSeleccionado =
    [{id:1, item: "Zapatilla", price: 25000}
    ,{id:2, item: "Remera", price: 5000}
    ,{id:3, item: "Jean", price: 20000}]
;

//Crea un Array con solo los items.
const ofertas= [];
productoSeleccionado.forEach((productoSeleccionado) => { ofertas.push(productoSeleccionado.item)})


let seleccion = Number(prompt(`¿Que producto desea?\n${ofertas.join('\n')}`));
let cantidadSeleccionada;
let total = 0;

const cantidad = (x, y) => {
    return x * y
}

//Optimizado el codigo del while 
while (seleccion != 0) {
    cantidadSeleccionada = prompt(`Usted ha seleccionado ${productoSeleccionado[seleccion - 1].item}, indique cuántos desea...`);
    total += cantidad(Number(cantidadSeleccionada), productoSeleccionado[seleccion - 1].price);
    seleccion = Number(prompt(`¿Qué producto desea?\n${ofertas.join('\n')}`));
}

alert(`El total de su compra es de: $${total}`)


//costo de envio
const envio = function () {
    if (total >= 30000) {
        alert("Gracias por su compra! Por su compra mayor a $30000 el envio le resulta gratis")
    } else {
        total += 1200
        alert("El costo de envio es de 1200, el total es: " + total)
    }
}

envio();