//Propósito: Calcular la cuenta total de una mesa en un restaurante con todos los platos pedidos.


// Visualizar el menú completo con su código.

function visualizarMenu(menuDeComida) {
    menuDeComida.forEach(plato => {
        console.log(plato.ID + " " + plato.nombre);
    });
}

visualizarMenu(menuDeComida);

// Función de cálculo del total de cada comida pedida.

function totalPorCadaComida(cantidad, plato) {
    return (cantidad * plato);
}

// Resumen de la cuenta de la mesa.

let listaDePedidos = "";
let totalCuenta = 0;
let plato = prompt("Ingresar número del menú pedido del 1 al 7 o ESC para cerrar la cuenta" + "\n"
                            + menuDeComida[0].ID + " - " + menuDeComida[0].nombre + "\n"
                            + menuDeComida[1].ID + " - " + menuDeComida[1].nombre + "\n"
                            + menuDeComida[2].ID + " - " + menuDeComida[2].nombre + "\n"
                            + menuDeComida[3].ID + " - " + menuDeComida[3].nombre + "\n"
                            + menuDeComida[4].ID + " - " + menuDeComida[4].nombre + "\n"
                            + menuDeComida[5].ID + " - " + menuDeComida[5].nombre + "\n"
                            + menuDeComida[6].ID + " - " + menuDeComida[6].nombre + "\n"
            );
let cantidadDePlatos = prompt ("Ingresa la cantidad de Platos pedidos del seleccionado en la mesa");

while(plato != "ESC") {
    
   switch (plato) {
       case "1":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[0].nombre + " " + "$ " + menuDeComida[0].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[0].precio);
            break;
        case "2":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[1].nombre + " " + "$ " + menuDeComida[1].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[1].precio);
            break;
        case "3":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[2].nombre + " " + "$ " + menuDeComida[2].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[2].precio);
            break;
        case "4":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[3].nombre + " " + "$ " + menuDeComida[3].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[3].precio);
            break;
        case "5":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[4].nombre + " " + "$ " + menuDeComida[4].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[4].precio);
            break;
        case "6":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[5].nombre + " " + "$ " + menuDeComida[5].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[5].precio);
            break;
        case "7":
            listaDePedidos += cantidadDePlatos + " " + menuDeComida[6].nombre + " " + "$ " + menuDeComida[6].precio + "\n";
            totalCuenta += totalPorCadaComida(cantidadDePlatos, menuDeComida[6].precio);
            break;
        default:
           alert("Ingresar un menú disponible en la Carta")
           break;
   }
   plato = prompt("Ingresar número del menú pedido del 1 al 7 o ESC para cerrar la cuenta" + "\n"
                            + menuDeComida[0].ID + " - " + menuDeComida[0].nombre + "\n"
                            + menuDeComida[1].ID + " - " + menuDeComida[1].nombre + "\n"
                            + menuDeComida[2].ID + " - " + menuDeComida[2].nombre + "\n"
                            + menuDeComida[3].ID + " - " + menuDeComida[3].nombre + "\n"
                            + menuDeComida[4].ID + " - " + menuDeComida[4].nombre + "\n"
                            + menuDeComida[5].ID + " - " + menuDeComida[5].nombre + "\n"
                            + menuDeComida[6].ID + " - " + menuDeComida[6].nombre + "\n"
            );
    
    if (plato != "ESC") {
        cantidadDePlatos = prompt ("Ingresa la cantidad de Platos pedidos del seleccionado en la mesa");
    }  
}

alert("Resumen total de la cuenta:" + "\n" + listaDePedidos + "\n" + "Valor total de la mesa: " + "$" + totalCuenta);
document.write("Resumen total de la cuenta:" + "\n" + listaDePedidos + "\n" + "Valor total de la mesa: " + "$" + totalCuenta);

let sinTACC = true;

function comidaParaCeliacos() {
    const comidaSinTacc = menuDeComida.filter((plato)=>{
        if (sinTACC) {
            return plato.sinTACC === true;
        } else {
            return plato;
        }
    });
    console.log(comidaSinTacc);
}

comidaParaCeliacos();