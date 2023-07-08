const { validarCampoNombre, validarCampoEmail, validarCampoContrasenia } = require('../routes/validacion')

describe('Pruebas para validar un formulario de registro', () => {
describe('Pruebas campo nombre', () => {
test('Prueba para nombre vacio', () => {
expect(validarCampoNombre('')).toBe(false)
})
test('Prueba para nombre registrado', () => {
expect(validarCampoNombre('Pepito')).toBe(true)
})
})
describe('Pruebas campo email', () => {
test('Prueba para email con estructura ca', () => {
expect(validarCampoEmail('pepito01')).toBe(false)
})
test('Prueba para email con estructura ca@ca', () => {
expect(validarCampoEmail('pepito01@ejemplo')).toBe(false)
})
test('Prueba para email con estructura ca@ca.ca ', () => {
expect(validarCampoEmail('pepito01@ejemplo.com')).toBe(true)
})
})
// describe('Pruebas campo contraseña', () => {

// })
})