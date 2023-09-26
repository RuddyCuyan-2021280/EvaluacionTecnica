function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/ /g, '');
    const cadenaReverso = cadena.split('').reverse().join('');
    return cadena === cadenaReverso;
}

document.addEventListener('DOMContentLoaded', () => {
    const palabraInput = document.getElementById('palabra');
    const resultadoParrafo = document.getElementById('resultado');
    const verificarBtn = document.getElementById('verificarBtn');

    verificarBtn.addEventListener('click', () => {
        const palabra = palabraInput.value;

        if (esPalindromo(palabra)) {
            resultadoParrafo.textContent = `"${palabra}" es un palíndromo.`;
        } else {
            resultadoParrafo.textContent = `"${palabra}" no es un palíndromo.`;
        }
    });
});