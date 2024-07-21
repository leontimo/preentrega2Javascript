// Variables y objetos necesarios
let saldo = 0;
let precioCompra = 5; // Precio por FIFA Coin
let precioVenta = 4; // Precio por FIFA Coin

let transacciones = [];

// Objeto para manejar las operaciones de compra y venta
let mercado = {
    comprar: function(cantidad) {
        let costo = cantidad * precioCompra;
        if (saldo >= costo) {
            saldo -= costo;
            transacciones.push({ tipo: "Compra", cantidad: cantidad, costo: costo });
            alert(`Has comprado ${cantidad} FIFA Coins por $${costo}. Saldo actual: $${saldo}.`);
        } else {
            alert("No tienes suficiente saldo para realizar esta compra.");
        }
    },
    vender: function(cantidad) {
        let ganancia = cantidad * precioVenta;
        saldo += ganancia;
        transacciones.push({ tipo: "Venta", cantidad: cantidad, ganancia: ganancia });
        alert(`Has vendido ${cantidad} FIFA Coins por $${ganancia}. Saldo actual: $${saldo}.`);
    },
    mostrarTransacciones: function() {
        console.log("Historial de transacciones:");
        transacciones.forEach(transaccion => {
            console.log(`Tipo: ${transaccion.tipo}, Cantidad: ${transaccion.cantidad}, Monto: $${transaccion.costo || transaccion.ganancia}`);
        });
    }
};

// Funciones para capturar datos y realizar operaciones
function iniciarSimulacion() {
    saldo = parseFloat(prompt("Ingresa tu saldo inicial:"));
    let continuar = true;

    while (continuar) {
        let accion = prompt("¿Qué deseas hacer? (comprar/vender/mostrar/salir)").toLowerCase();
        switch (accion) {
            case "comprar":
                let cantidadCompra = parseInt(prompt("¿Cuántas FIFA Coins deseas comprar?"));
                mercado.comprar(cantidadCompra);
                break;
            case "vender":
                let cantidadVenta = parseInt(prompt("¿Cuántas FIFA Coins deseas vender?"));
                mercado.vender(cantidadVenta);
                break;
            case "mostrar":
                mercado.mostrarTransacciones();
                break;
            case "salir":
                continuar = false;
                break;
            default:
                alert("Opción no válida. Por favor, elige una acción válida.");
        }
    }
}

// Iniciar la simulación
iniciarSimulacion();