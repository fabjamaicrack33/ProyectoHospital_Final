const { sumar } = require('./sumar')


//test recibe un nombre y una funcion
/*test("La funcion sumar", () => {
//preparacion, datos de entrada
let numeroUno = 2
let numeroDos = 3
//resultados esperados
let resultadoEsperado = 6
//Accion, resultado obtenido
const resultadoObtenido = sumar(numeroUno,numeroDos)
//verificacion
expect(resultadoObtenido).toBe(resultadoEsperado)
})
//only sirve para que solo ejecute ese test
test.only("La funcion sumar", () => {
//preparacion, datos de entrada
let numeroUno = 2
let numeroDos = 3
//resultados esperados
let resultadoEsperado = 5
//Accion, resultado obtenido
const resultadoObtenido = sumar(numeroUno,numeroDos)
//verificacion
expect(resultadoObtenido).toBe(resultadoEsperado)
})*/

// test('',()=>{expect().toBe()}) FORMATO
//prueba sumar numeros positivos
test.only('sumar numeros positivos', () => { expect(sumar(2, 3)).toBe(5) })
//prueba sumar numeros negativos
test('sumar numeros negativos', () => { expect(sumar(-2, -3)).toBe(-5) })
//prueba sumar numeros negativo y positivo
test('sumar numeros negativo y positivo', () => { expect(sumar(-2, 3)).toBe(1) })
//prueba sumar numeros positivo y negativo
test('sumar numeros positivo y negativo', () => { expect(sumar(2, -3)).toBe(-1) })
//prueba numero 0
test('numero 0', () => { expect(sumar(0, 0)).toBe(0) })
//prueba sumar fraccionario
//Para valores cercanos toBeCloseTo
test('sumar fraccionario', () => { expect(sumar(1 / 4, 1 / 3)).toBeCloseTo(7 / 12) })