const productoContainer = document.getElementById("productoContainer");

//creacion de divs para todos los elementos del array en el carrito.json
const getProducts = async () => {
  try {
    const response = await fetch("./carrito.json");
    const productos = await response.json();

    productos.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img class="imagenes" width= 200 src="${producto.image}"> 
        <h2>Id: ${producto.id}</h2>
        <h3>Item: ${producto.item}</h3>
        <p>Precio: $${producto.price}</p>
        <input type="number" min="0" value="0" class="cantidad" data-price="${producto.price}">
        <hr>
      `;
      productoContainer.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
};

//calculo realizado al clickear el boton, recorre los inputs
const botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener("click", () => {
  let total = 0;
  const cantidades = document.getElementsByClassName("cantidad");

  for (let i = 0; i < cantidades.length; i++) {
    let cantidad = parseInt(cantidades[i].value);
    cantidad = isNaN(cantidad) ? 0 : cantidad;
    let price = parseInt(cantidades[i].getAttribute("data-price"));
    total += cantidad * price;
  }

  Swal.fire(`El total de su compra es de: $${total}`);

  const costoEnvio = total >= 30000 ? 0 : 1200;
  total += costoEnvio;
  const mensajeEnvio =
    costoEnvio === 0
      ? `Gracias por su compra. El envío es gratis debido a que su compra supera los $30000.El total es: $${total}`
      : `El costo de envío es de $1200. El total es: $${total}`;

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: mensajeEnvio,
    showConfirmButton: false,
    timer: 3000
  });
});

//boton de limpiar
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", () => {
  const cantidades = document.getElementsByClassName("cantidad");
  for (let i = 0; i < cantidades.length; i++) {
    cantidades[i].value = 0;
  }
});

let productos = [];

getProducts()
  .then(() => {
    const cantidadInputs = document.getElementsByClassName("cantidad");
    productos = Array.from(cantidadInputs).map((input) => ({
      price: parseInt(input.getAttribute("data-price")) || 0,
    }));
  })
  .catch((error) => {
    console.log(error);
  });