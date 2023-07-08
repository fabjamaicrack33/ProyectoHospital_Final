const {validarContrasenia} = require('./validaciones')

test('validar la contraseña',()=>{
expect(validarContrasenia('12356')).toBe(false) //Solo numeros.
expect(validarContrasenia('abcde12340')).toBe(false)//Letras minusculas y numeros  
expect(validarContrasenia('ABcd123')).toBe(false)//Letras minusculas , mayusculas y numeros menor a 8 caracteres.
expect(validarContrasenia('abcdertga')).toBe(false)//Solo letras minusculas.
expect(validarContrasenia('FEas')).toBe(false)//Letras mayusculas y minusculas.
expect(validarContrasenia('348LEACI')).toBe(false)//Numeros y letras mayusculas. 
expect(validarContrasenia('KJALSIW')).toBe(false)//Solo letras mayusculas. 
})