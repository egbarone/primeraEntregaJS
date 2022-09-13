const productos = [
     { nombre: "harina", precio: 50},
     { nombre: "galletitas", precio: 100},
     { nombre: "cerveza", precio: 150},
     { nombre: "leche", precio: 200},
     { nombre: "gaseosa", precio: 250},
];
let carrito = []

let seleccion = prompt("Hola...desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola... desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("a continuacion, nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + 
    producto.precio + "$" );
    alert(todoslosProductos.join (" - "))
}

else if (seleccion == "no"){
    alert("gracias por visitar nuestra pagina.... hasta pronto...!!!")
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "harina" ||
        producto == "galletitas" ||
        producto == "cerveza" ||
        producto == "leche" ||
        producto == "gaseosa"){
    switch (producto) {
        case "harina":
            precio = 50;
            break;
        case "galletitas":
            precio = 100;
            break;
        case "cerveza":
            precio = 150;
            break; 
        case "leche":
            precio = 200;
            break;
        case "gaseosa":
            precio = 250;
            break;      
        default:
            break;
        }   
    let unidades = parseInt(prompt("Cuantas unidades desea llevar...?"))  

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }   else {
        alert("disculpe, no tenemos ese producto.....")
    }
        seleccion = prompt("desea seguir agregando productos a su carrito...?")

        while (seleccion === "no") {
            alert("Gracias por su compra, a continuacion el total de su carrito....")
            carrito.forEach((carritoFinal) => { 
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)    
            })
        break;
    }
}

const total = carrito.reduce((acc, el)  => acc + el.precio * el.unidades, 0)
            alert(`El total a pagar es de : ${total}`)