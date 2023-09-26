function contarVocalesYConsonantes(cadena) {
    cadena = cadena.toLowerCase();
    let numVocales = 0;
    let numConsonantes = 0;
    const expresionVocales = /[aeiouáéíóú]/;

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (expresionVocales.test(caracter)) {
            numVocales++;
        } else if (caracter >= 'a' && caracter <= 'z') {
            numConsonantes++;
        }
    }

    return {
        numVocales,
        numConsonantes
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const palabraInput = document.getElementById('palabra');
    const resultadoParrafo = document.getElementById('resultado');
    const contarBtn = document.getElementById('contarBtn');

    contarBtn.addEventListener('click', () => {
        const palabra = palabraInput.value;
        const resultado = contarVocalesYConsonantes(palabra);
        mostrarResultado(resultado);
    });

    function mostrarResultado(resultado) {
        const { numVocales, numConsonantes } = resultado;
        const resultadoTexto = `Número de vocales: ${numVocales}<br>Número de consonantes: ${numConsonantes}`;
        resultadoParrafo.innerHTML = resultadoTexto;
    }
});