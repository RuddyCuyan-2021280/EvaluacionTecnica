function contarDigitos(numero) {
    const cadenaNumero = numero.toString();
    const cantidadDigitos = cadenaNumero.length;
    return cantidadDigitos;
}

document.addEventListener('DOMContentLoaded', () => {
    const numeroInput = document.getElementById('numero');
    const resultadoParrafo = document.getElementById('resultado');
    const contarBtn = document.getElementById('contarBtn');

    contarBtn.addEventListener('click', () => {
        const numero = numeroInput.value;
        const cantidadDigitos = contarDigitos(numero);
        mostrarResultado(cantidadDigitos);
    });

    function mostrarResultado(cantidadDigitos) {
        resultadoParrafo.textContent = `El número ingresado tiene ${cantidadDigitos} dígitos.`;
    }
});