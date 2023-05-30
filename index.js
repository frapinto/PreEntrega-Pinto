//Objeto con todos los productos.
let productoSeleccionado =
    [{id:1, item: "Zapatilla", price: 25000}
    ,{id:2, item: "Remera", price: 5000}
    ,{id:3, item: "Jean", price: 20000}]
;
//Establece el localstorage.
localStorage.setItem("productoSeleccionado",JSON.stringify(productoSeleccionado));

const productoGuardado = JSON.parse(localStorage.getItem("productoSeleccionado"));
const productoContainer = document.getElementById("productoContainer");

//Para cada producto crea un Div con un una tarjeta con su Id,nombre y precio.
productoGuardado.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h2>Id: ${producto.id}</h2>
      <p>Item: ${producto.item}</p>
      <p>Precio: ${producto.price}</p>
      <input type="number" min="0" value="0" class="cantidad"
      <hr>
    `; //la linea 21 genera un input con class "cantidad" que es llamada para luego multiplicar por el precio unitario
  
    productoContainer.appendChild(div);
  });


  //Establece el calculo que realiza para el carrito una vez clickeado el boton.
  const botonCalcular = document.getElementById("botonCalcular");
  botonCalcular.addEventListener("click", () => {
    let total = 0;
    const cantidades = document.getElementsByClassName("cantidad");
    for (let i = 0; i < productoGuardado.length; i++) {
      let cantidad = parseInt(cantidades[i].value);
      cantidad = isNaN(cantidad) ? 0 : cantidad;  //si el usuario no escribe nada lo interpreta como = 0.
      let price = productoGuardado[i].price;
      total += cantidad * price;
    }

alert(`El total de su compra es de: $${total}`)

//Cálculo de costo de envio. Me olvide de eliminar el costo de envio si el usuario pone 0 en todo, para la entrega final lo corrijo.
const costoEnvio = total >= 30000 ? 0 : 1200;
total += costoEnvio;
const mensajeEnvio =
  costoEnvio === 0
    ? "Gracias por su compra. El envío es gratis debido a que su compra supera los $30000."
    : `El costo de envío es de $1200. El total es: ${total}`;

alert(mensajeEnvio);
})