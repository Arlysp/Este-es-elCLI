import React from 'react'


const ItemListContainer = ({Saludo}) => {
  let seccion1 = document.getElementById("seccion1");
let productos = [];
let carrito = [];
function cargar (pagina) {
  fetch(`https://dummyjson.com/products?limit=10&skip=${(pagina-1)*10}`)
  .then(response => response.json())
  .then(data => {
    seccion1.innerHTML = "";
    productos = data.products;
    productos.forEach(producto => {
      seccion1.innerHTML += `
      <div className="card">
      <img src="${producto.thumbnail}" className="card-img-top" alt="...">
      <div className="card-body">
      <h5 className="card-title">${producto.title}</h5>
      <h4 className="card-title">$${producto.price}</h4>
      <p className="card-text">${producto.description}</p>
      <p>${producto.stock}</P>
      <button>Ver Producto</button>
      <button onclick="agregarAlcarrito(${producto.id})" className="boton-agrgar"> agregar <i class="fas fa-shopping-cart"</i></button>
      </div>
      </div>`
});})}
cargar(1)
  return (
    <div>   
    </div>
  );
};

export default ItemListContainer