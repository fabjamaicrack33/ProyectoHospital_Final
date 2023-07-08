function sumar(a , b, usarname, password) {
    if(usarname === 'desarrollador' || password =='backend1234'){
    return a + b
    } else{
    throw new Error("Credenciales inválidas")
    }
    }
    
    module.exports = {sumar: sumar}