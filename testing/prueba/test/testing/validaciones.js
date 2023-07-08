function validarContrasenia(contrasenia){
const tieneMayuscula =/[A-Z]/.test(contrasenia)
const tieneNumero = /\d/.test(contrasenia)
const tieneMas8Caracteres = contrasenia.length > 8

return tieneMayuscula && tieneNumero && tieneMas8Caracteres
}

module.exports = {validarContrasenia: validarContrasenia}
//console.log(validarContrasenia('123'))
//console.log(validarContrasenia('12345678'))
//console.log(validarContrasenia('12345677May'))