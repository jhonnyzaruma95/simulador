//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let montoDisponible = ingresos - egresos;
    if (montoDisponible < 0){
        return 0;
    }
    return montoDisponible;
}

function calcularCapacidadPago(montoDisponible){
    const capacidadPago = montoDisponible * 0.50;
    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios){
    let tasaDecimal = tasa / 100;
    let interes = monto * tasaDecimal * plazoAnios;
    return interes;
}

function calcularTotalPagar(monto, interes){
    let subtotal = monto + interes;
    let totalPagar = subtotal + 100;
    return totalPagar;
}