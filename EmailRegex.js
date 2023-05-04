function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const emailValido = validarEmail('exemplo@dominio.com');
console.log(emailValido); // true

const emailInvalido = validarEmail('exemplo@dominio');
console.log(emailInvalido); // false*