let usuario = prompt("Registrese en la web, ingrese su Nombre")
let contraseña = prompt("Ingrese la contraseña que desea agregar")

alert("Su usuario y contraseña se registraron exitosamente")

let usuarioIngresado = prompt("Ingrese su Usuario")
let contraseñaIngresada = prompt("Ingrese su Contraseña")
 

for (let i = 0; i < 3; i++) {
  if (usuario === usuarioIngresado && contraseña === contraseñaIngresada) {
    alert("Bienvenido " + usuarioIngresado + " a nuestra web")
        mensaje()
        break
    } else {
      alert("Su usuario o contraseña es incorrecta")
        usuarioIngresado = prompt("Ingrese su Usuario")
        contraseñaIngresada = prompt("Ingrese su Contraseña")
      }
    } 

    // ARRAY PRODUCTO 
    let products = [
      { id: 1, nombre: "Monitor Asus TUF 165hz", categoria: "monitores", precio: 132900, stock: 15},
      { id: 2, nombre: "Monitor LG 75hz", categoria: "monitores", precio: 44800, stock: 10},
      { id: 3, nombre: "Teclado Redragon Draconic", categoria: "teclados", precio: 15000, stock: 2},
      { id: 4, nombre: "Teclado Redragon Kumara K552", categoria: "teclados", precio: 15600, stock: 8},
      { id: 5, nombre: "MSI GeForce RTX 3080", categoria: "grafica", precio: 150285, stock: 3 },
      { id: 6, nombre: "MSI GeForce GTX 1650 Super", categoria: "grafica", precio: 36335, stock: 6},
      { id: 7, nombre: "Intel Core i9-9900K", categoria: "procesador", precio: 81485, stock: 0},
      { id: 8, nombre: "Intel Core i7-8700K", categoria: "procesador", precio: 65575, stock: 1}
    ]
    
    let productos = products.map(product => {
      return new Producto(product.id, product.nombre, product.categoria, product.precio, product.stock)
    })

function mensaje() {
  let listaProductos = "Seleccione una opción para realizar una accion: \n0: para salir" 
                                                              + "\n\n1: para mostrar todos los productos" 
                                                              + "\n2: mostrar solo componentes" 
                                                              + "\n3: mostrar solo perifericos"
                                                              + "\n4: mostrar productos entre $15.000 y $45.000"
                                                              + "\n5: mostrar productos entre $45.000 y $170.000"
                                                              + "\n6: Agregar productos al carrito de compras"
                                                              + "\n7: Ver mi carrito de compras" 
}
let total = 0
let ProductosCarrito = []
let validCategories = ['monitores', 'grafica', 'procesador']
let listaProductos = "Seleccione una opción para realizar una accion: \n0: para salir" 
                                                              + "\n\n1: para mostrar todos los productos" 
                                                              + "\n2: mostrar solo componentes" 
                                                              + "\n3: mostrar solo perifericos"
                                                              + "\n4: mostrar productos entre $15.000 y $45.000"
                                                              + "\n5: mostrar productos entre $45.000 y $170.000"
                                                              + "\n6: Agregar productos al carrito de compras"
                                                              + "\n7: Ver mi carrito de compras"


let opcion
  do {
    opcion = Number(prompt(listaProductos))
  if(opcion === 1){
    let listaProductos= products.map(product =>"MODELO: " + product.nombre + " CATEGORIA: " + product.categoria + " - "  + " PRECIO: $" + product.precio + " - " +  " STOCK: " + product.stock).join("\n\n")
    alert(listaProductos)

  } else if(opcion === 2){
    let productosSinTeclado = products.filter(product => product.categoria !== 'teclados')
    let Componentesfiltrados = productosSinTeclado.filter(product => validCategories.includes(product.categoria))
    let filtrados = "LISTA DE COMPONENTES:\n" + Componentesfiltrados.map(filtrado => "MODELO: " + filtrado.nombre + " CATEGORIA: " + filtrado.categoria + " - " + "PRECIO: $" + filtrado.precio + " - " + " STOCK: " + filtrado.stock).join("\n\n")
    alert(filtrados)

  } else if(opcion === 3){
    let Perifericosfiltrados = products.filter(product => product.categoria === 'teclados')
    let filtrados = "LISTA DE PERIFERICOS:\n" + Perifericosfiltrados.map(filtrado =>"MODELO: " + filtrado.nombre + " CATEGORIA: " + filtrado.categoria + " - "  + " PRECIO: $" + filtrado.precio + " - " +" STOCK: " + filtrado.stock).join("\n\n")
    alert(filtrados)

  } else if(opcion === 4){
    let filtradosPrecioMenor45000 = products.filter(product => product.precio >= 0 && product.precio <= 45000)
    let filtrados = "LISTA DE PRODUCTOS DE VALOR MENOR A 45.000:\n" + filtradosPrecioMenor45000.map(filtrado =>"MODELO: " + filtrado.nombre + " CATEGORIA: " + filtrado.categoria + " - "  + " PRECIO: $" + filtrado.precio + " - " + "STOCK: " + filtrado.stock).join("\n\n")
    alert(filtrados)

  } else if(opcion === 5){
    let filtradosPrecioMayor45000 = products.filter(product => product.precio > 45000 && product.precio <= 170000)
    let filtrados = "LISTA DE PRODUCTOS DE VALOR MAYOR A 45.000:\n" + filtradosPrecioMayor45000.map(filtrado =>"MODELO: " + filtrado.nombre + " CATEGORIA: " + filtrado.categoria + " - "  + " PRECIO: $ " + filtrado.precio + " - " + " STOCK: " + filtrado.stock).join("\n\n")
    alert(filtrados)

  } else if(opcion === 6){
    let listaProductos = "Seleccione un producto para agregar:\n0: para salir\n" + products.map(product => product.id + ": MODELO: " + product.nombre + " CATEGORIA: " + product.categoria + " - " + " PRECIO: $" + product.precio + " - " + "STOCK: " + product.stock).join("\n\n")

    let opcion        
    do{               
        opcion = Number(prompt(listaProductos))
        let productoBuscado = productos.find(product => product.id === opcion)
        if(productoBuscado){
            let posicionProductoBuscado = ProductosCarrito.findIndex(product => product.id === productoBuscado.id)
            if (posicionProductoBuscado != -1){                    
                ProductosCarrito[posicionProductoBuscado].cantidadUnidades++
                ProductosCarrito[posicionProductoBuscado].subtotal = ProductosCarrito[posicionProductoBuscado].valorUnidad * ProductosCarrito[posicionProductoBuscado].cantidadUnidades                    
            }else{                    
                ProductosCarrito.push({
                  id: productoBuscado.id,
                  nombre: productoBuscado.nombre,
                  cantidadUnidades: 1,
                  precioUnidad: productoBuscado.precio,
                  subtotal: productoBuscado.precio
                })                   
            }                
        }                                       
    }while (opcion != 0)
        
  } else if(opcion === 7){
    if (ProductosCarrito.length > 0) {
      const total = ProductosCarrito.reduce((acumulador, product) => acumulador + product.subtotal, 0)
      let carrito = alert("Los productos en su carrito son:\n\n " + ProductosCarrito.map(product => "Modelo: " + product.nombre + " - " + "CANTIDAD: " + product.cantidadUnidades + " SUBTOTAL: $" + product.subtotal).join("\n\n") + "\n\nTotal: $" + total) 
      // CARRITO SI ESTA DEFINIDO PERO ES LO MISMO SI HAGO alert(carrito) es practicamente lo mismo por eso lo dejo asi
      finalizarcompra()
      break 
    } else {
      let carrito = alert("Su carrito está vacío")
  } 
  
}

}  while (opcion != 0)

function finalizarcompra(){
  alert("Gracias por la compra")
}
