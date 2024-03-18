// Definir constantes para los precios de las plantas
const precioPlanta1 = 5000;
const precioPlanta2 = 3800;
const precioPlanta3 = 10000;

// Definir un array de plantas disponibles
const plantasDisponibles = ['Alocasia Silver Dragon', 'Alocasia Cuprea', 'Monstera Variegata'];

// Función para mostrar las opciones de compra al usuario
function mostrarOpciones() {
  let mensaje = 'Bienvenido a CasaTerra, tu tienda de plantas exóticas favoritas.\n\n';
  mensaje += 'Elige una de las siguientes plantas:\n\n';
  
  // Iterar sobre el array de plantas y mostrarlas al usuario
  plantasDisponibles.forEach((planta, index) => {
    mensaje += `${index + 1}. ${planta}\n`;
  });
  
  // Mostrar el mensaje con las opciones al usuario
  alert(mensaje);
}

// Función para procesar la selección del usuario
function procesarSeleccion() {
  let carrito = []; // Array para almacenar los productos en el carrito

  do {
    // Pedir al usuario que seleccione una planta
    let seleccion = prompt('Por favor, ingresa el número de la planta que deseas comprar o presiona Cancelar para finalizar la compra:');

    // Verificar si el usuario canceló la selección
    if (seleccion === null) {
      break; // Salir del bucle si el usuario canceló la selección
    }

    // Convertir la selección a un número entero
    seleccion = parseInt(seleccion);
    
    // Verificar si la selección es válida
    if (seleccion >= 1 && seleccion <= plantasDisponibles.length) {
      let plantaSeleccionada = plantasDisponibles[seleccion - 1];
      let precio;
      
      // Determinar el precio de la planta seleccionada
      switch (seleccion) {
        case 1:
          precio = precioPlanta1;
          break;
        case 2:
          precio = precioPlanta2;
          break;
        case 3:
          precio = precioPlanta3;
          break;
        default:
          break;
      }

      // Pedir al usuario la cantidad de unidades a comprar
      let cantidad = prompt(`Has seleccionado ${plantaSeleccionada}. El precio es $${precio} por unidad.\nPor favor, ingresa la cantidad de unidades que deseas comprar:`);

      // Convertir la cantidad a un número entero
      cantidad = parseInt(cantidad);

      // Verificar si la cantidad es válida
      if (!isNaN(cantidad) && cantidad > 0) {
        let precioTotal = precio * cantidad;
        carrito.push({ producto: plantaSeleccionada, cantidad: cantidad, precioTotal: precioTotal }); // Agregar el producto al carrito
        alert(`Has seleccionado ${cantidad} unidades de ${plantaSeleccionada}. El precio total es $${precioTotal}.`);
      } else {
        alert('Cantidad inválida. Por favor, ingresa un número válido de unidades.');
      }
    } else {
      // Mostrar un mensaje de error si la selección no es válida
      alert('Selección inválida. Por favor, elige un número dentro del rango proporcionado.');
    }
  } while (true); // Repetir hasta que el usuario cancele la selección
  
  // Mostrar el resumen de la compra
  mostrarResumenCompra(carrito);
}

// Función para mostrar el resumen de la compra
function mostrarResumenCompra(carrito) {
  if (carrito.length > 0) {
    let resumen = 'Resumen de la compra:\n\n';
    let totalCompra = 0;

    carrito.forEach(item => {
      resumen += `${item.cantidad} unidad(es) de ${item.producto} - Precio total: $${item.precioTotal}\n`;
      totalCompra += item.precioTotal;
    });

    resumen += `\nTotal de la compra: $${totalCompra}`;
    alert(resumen);
    // Agregar un mensaje de despedida
    alert('¡Gracias por tu compra! Serás redirigido a la página de pago.');
    // Simular redireccionamiento a la página de pago
    window.location.href = 'pagina_pago.html';
  } else {
    alert('No has agregado ningún producto al carrito.');
  }
}

// Llamar a la función principal para mostrar las opciones al usuario
mostrarOpciones();

// Llamar a la función para procesar la selección del usuario
procesarSeleccion();