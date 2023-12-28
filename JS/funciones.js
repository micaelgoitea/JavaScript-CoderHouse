// Función para visualuzar el menú disponible para pedir.

const visualizarLaCarta = () => {
    menuDeComida.forEach(plato => {
        contenedorPlatos.innerHTML += `
            <div class="platos-container class="card" style="width: 16rem;">
                <img src="${plato.img}" />
                <h4>${plato.nombre}</h4>
                <p>$${plato.precio}</p>
                <p>Valoracion: ${plato.valoración}</p>
                <p>${plato.tipoDeCocina}</p>
                <p>${plato.descripcion}</p>
                
                <button id="${plato.ID}" class="agregar">Agregar a la Cuenta</button>
            </div>
        `;
    });
}

// Función para agregar a la cuenta el Plato que fue clickeado con "Agregar a la Cuenta"

const agregarALaCuenta = pedido => {
    if (pedido.target.classList.contains('agregar')) {
        const id = pedido.target.id;
        const plato = menuDeComida.find(plato => plato.ID == id);
        cuenta.push(plato);
        mostrarCuenta();
    }
}

// Función para mostrar la cuenta final de todos los pedidos de una mesa.

function mostrarCuenta() {
    const cuentaFinal = document.getElementById('cuenta-final');
    cuentaFinal.innerHTML = '<h2>Cuenta Final:</h2>';
    cuenta.forEach(plato => {
        cuentaFinal.innerHTML += `
            <p>${plato.nombre} \t $${plato.precio}</p>
        `;
    });
    sincronizarStorage();
}

// Array Method para filtrar y obtener solo la comida apta para celíacos.

let sinTACC = true;
let vegetariana = true;

function filtrarComidaSinTACC(plato) {
    if (sinTACC) {
        return plato.sinTACC === true;
    } else {
        return plato;
    }
}

function comidaParaCeliacos() {
    const comidaSinTacc = menuDeComida.filter(filtrarComidaSinTACC);
    //console.log("Platos celíacos:");
    //visualizarMenu(comidaSinTacc);
}

comidaParaCeliacos();

// Array method para filtrar la comida para vegetarianos y celíacos.

function filtrarComidaVegetariana(plato) {
    if (vegetariana) {
        return plato.vegetariano === true;
    } else {
        return plato;
    }
}

function comidaParaCeliacosYVegetarianos() {
    const comidaSinTaccYVegetarianas = menuDeComida.filter(filtrarComidaSinTACC).filter(filtrarComidaVegetariana);
    //console.log("Platos celíacos y vegetarianos:");
    //visualizarMenu(comidaSinTaccYVegetarianas);
}

comidaParaCeliacosYVegetarianos();

// Búsqueda del Plato mas económico

function platoMasEconomico(listaDeComida) {

    var valorMasEconomico = listaDeComida[0].precio;
    var platoDeMenorValor = listaDeComida[0].nombre;

    for (var i = 1; i < listaDeComida.length; i++) {
        if (listaDeComida[i].precio < valorMasEconomico) {
            valorMasEconomico = listaDeComida[i].precio;
            platoDeMenorValor = listaDeComida[i].nombre;
        }
    }
}

platoMasEconomico(menuDeComida);

function sincronizarStorage() {
    localStorage.setItem('cuentaFinal', JSON.stringify(cuenta));
}


window.addEventListener("DOMContentLoaded", () => {
    cuenta = JSON.parse(localStorage.getItem("cuentaFinal")) || [];
    mostrarCuenta();
});