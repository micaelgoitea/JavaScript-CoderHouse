//Propósito: Calcular la cuenta total de una mesa en un restaurante con todos los platos pedidos.

// Valores de cada plato en Sistema

let hamburguesaConPapasFritas = 500;
let fideosConTuco = 250;
let papasConCheddar = 300;
let ravioles = 480;
let carneAlHorno = 590;
let milanesaALaNapolitana = 600;

// Función de cálculo del total de cada comida pedida.

function totalPorCadaComida(cantidad, plato) {
    return (cantidad * plato);
}

// Resumen de la cuenta de la mesa.

let listaDePedidos = "";
let totalCuenta = 0;
let plato = prompt("Ingresar número del menú pedido del 1 al 6 o ESC para cerrar la cuenta" + "\n"
                            + "1) " + "Hamburguesa con Papas Fritas" + "\n"
                            + "2) " + "Fideos con Tuco" + "\n"
                            + "3) " + "Papas con Cheddar" + "\n"
                            + "4) " + "Ravioles" + "\n"
                            + "5) " + "Carne al Horno" + "\n"
                            + "6) " + "Milanesa a la Napolitana"
            );
let cantidadDePlatos = prompt ("Ingresa la cantidad de Platos pedidos del seleccionado en la mesa");


while(plato != "ESC") {
    
   switch (plato) {
       case "1":
            listaDePedidos += cantidadDePlatos + " Hamburguesa con Papas Fritas" + " " + "$ " + hamburguesaConPapasFritas + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, hamburguesaConPapasFritas);
            break;
        case "2":
            listaDePedidos += cantidadDePlatos + " Fideos con Tuco" + " " + "$ " + fideosConTuco + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, fideosConTuco);
            break;
        case "3":
            listaDePedidos += cantidadDePlatos + " Papas con Cheddar" + " " + "$ " + papasConCheddar + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, papasConCheddar);
            break;
        case "4":
            listaDePedidos += cantidadDePlatos + " Plato de Ravioles" + " " + "$ " + ravioles + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, ravioles);
            break;
        case "5":
            listaDePedidos += cantidadDePlatos + " Carne al Horno" + " " + "$ " + carneAlHorno + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, carneAlHorno);
            break;
        case "6":
            listaDePedidos += cantidadDePlatos + " Milanesa a la Napolitana" + " " + "$ " + milanesaALaNapolitana + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, milanesaALaNapolitana);
            break;
        default:
           alert("Ingresar un menú disponible en la Carta")
           break;
   }
   plato = prompt("Ingresar número del menú pedido del 1 al 6 o ESC para cerrar la cuenta" + "\n"
                            + "1) " + "Hamburguesa con Papas Fritas" + "\n"
                            + "2) " + "Fideos con Tuco" + "\n"
                            + "3) " + "Papas con Cheddar" + "\n"
                            + "4) " + "Ravioles" + "\n"
                            + "5) " + "Carne al Horno" + "\n"
                            + "6) " + "Milanesa a la Napolitana"
                );
    
    if (plato != "ESC") {
        cantidadDePlatos = prompt ("Ingresa la cantidad de Platos pedidos del seleccionado en la mesa");
    }  
}

alert("Resumen total de la cuenta:" + "\n" + listaDePedidos + "\n" + "Valor total de la mesa: " + "$" + totalCuenta);
document.write("Resumen total de la cuenta:" + "\n" + listaDePedidos + "\n" + "Valor total de la mesa: " + "$" + totalCuenta);