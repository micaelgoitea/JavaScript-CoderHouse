const visualizarLaCarta = () => {
    menuDeComida.forEach(plato => {
        contenedorPlatos.innerHTML += `
            <div class="platos-container">
                <img src="${plato.img}" />
                <h2>${plato.nombre}</h2>
                <p>$${plato.precio}</p>
                <p>Valoracion: ${plato.valoración}</p>
                <p>${plato.tipoDeCocina}</p>
                <button id="${plato.ID}" class="agregar">Agregar a la Cuenta</button>
            </div>
        `;
    });
}

const agregarALaCuenta = pedido => {
    if (pedido.target.classList.contains('agregar')) {
        const id = pedido.target.id;
        const plato = menuDeComida.find(plato => plato.ID == id);
        cuenta.push(plato);
        mostrarCuenta();
    }
}

const mostrarCuenta = () => {
    const cuentaFinal = document.getElementById('cuenta-final');
    cuentaFinal.innerHTML = '<h2>Cuenta Final:</h2>';
    cuenta.forEach (plato => {
        cuentaFinal.innerHTML += `
            <p>${plato.nombre} \t $${plato.precio}</p>
        `;
    });
}