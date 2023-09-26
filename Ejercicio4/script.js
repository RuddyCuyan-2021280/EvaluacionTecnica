function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return false;
    }

    if (!/[A-Z]/.test(contraseña)) {
        return false;
    }

    if (!/[a-z]/.test(contraseña)) {
        return false;
    }

    if (!/\d/.test(contraseña)) {
        return false;
    }

    return true;
}


document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const resultadoParrafo = document.getElementById('resultado');
    const validarBtn = document.getElementById('validarBtn');

    validarBtn.addEventListener('click', () => {
        const contraseña = passwordInput.value;
        const esValida = validarContraseña(contraseña);
        mostrarResultado(esValida);
    });

    function mostrarResultado(esValida) {
        if (esValida) {
            resultadoParrafo.textContent = 'Contraseña válida.';
        } else {
            resultadoParrafo.textContent = 'Contraseña no válida.';
        }
    }
});
