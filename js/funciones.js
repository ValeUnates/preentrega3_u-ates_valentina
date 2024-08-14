function agregarAlCarrito(productos){

    if(carrito.some(el => el.id === productos.id)){
        const indiceProductos = carrito.findIndex(el => el.id === productos.id);
        carrito[indiceProductos].cantidad += 1;
    } else {
        const nuevoProducto = {
            id: productos.id,
            nombre: productos.nombreDelProducto,
            precio: productos.precio,
            imagen: productos.imagen,
            cantidad: 1,
        };
        carrito.push(nuevoProducto);
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));

};

function hacerCard(productos){
    const card = document.createElement("div");
    card.className = "card";

    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = productos.nombreDelProducto || productos.nombre;

    const img = document.createElement("img")
    img.src = productos.imagen;
    img.className = "img";

    const precio = document.createElement("p");
    precio.innerText = productos.precio;

    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.onclick = () => agregarAlCarrito(productos);

    card.append(nombreProducto);
    card.append(img);
    card.append(precio);
    card.append(boton);

    container.append(card);

};
productos.forEach(el => hacerCard(el));


    const mostrar = document.createElement("button");
    mostrar.className= "botonMostrar"
    mostrar.innerText = "Mostrar carrito";

    mostrar.addEventListener("click", () => {
    carrito.forEach(el => hacerCard(el));
});

container.append(mostrar);

const limpiar = document.createElement("button");
limpiar.className="botonLimpiar"
limpiar.innerText = "Limpiar carrito";

limpiar.addEventListener("click", () => {
    carrito = [];

    localStorage.setItem("carrito", JSON.stringify(carrito));
});

container.append(limpiar);