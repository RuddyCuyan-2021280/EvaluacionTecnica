function calcularDiferenciaDias(fechaInicio, fechaFin) {
    const date1 = new Date(fechaInicio);
    const date2 = new Date(fechaFin);
    const diferenciaMilisegundos = date2 - date1;
    const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    return dias;
}

document.addEventListener('DOMContentLoaded', () => {
    const fechaInicioInput = document.getElementById('fechaInicio');
    const fechaFinInput = document.getElementById('fechaFin');
    const resultadoParrafo = document.getElementById('resultado');
    const calcularBtn = document.getElementById('calcularBtn');

    calcularBtn.addEventListener('click', () => {
        const fechaInicio = fechaInicioInput.value;
        const fechaFin = fechaFinInput.value;
        const diferenciaDias = calcularDiferenciaDias(fechaInicio, fechaFin);
        mostrarResultado(diferenciaDias);
    });

    function mostrarResultado(diferenciaDias) {
        resultadoParrafo.textContent = `Número de días entre las fechas: ${diferenciaDias}`;
    }
});