//1 REQUISITO: EL CAMPO NOMBRE NO DEBE ESTAR VACIO
function validarCampoNombre(nombre){
    return nombre !== '' //si no esta vacio, devuelve verdadero. Si esta vacio, devuelve falso
    }
    //2 REQUISITO: EL CAMPO EMAIL CUMPLA CON LA SIGUIENTE ESTRUCTURA caracteres@caracteres.caracteres
    function validarCampoEmail(email){
    return /\S+@\S+\.\S+/.test(email) //la funcion test verifica si la variable cumple con la expresion regular
    }
    //3 REQUISITO: la contraseña debe de tener mas de 8 caracteres
    function validarCampoContrasenia(contrasenia){
    return contrasenia.length >= 8
    }
    
    module.exports = {
    validarCampoNombre: validarCampoNombre,
    validarCampoEmail: validarCampoEmail,
    validarCampoContrasenia: validarCampoContrasenia
    }