const { sumar } = require('./sumar')


test('Prueba de rendimiento',()=>{
    const tiempoInicial = Date.now ();
    for(let i=0; i<1000000; i++){
    sumar(2,3)
    }

const tiempoFinal = Date.now()
const duracion =  tiempoInicial - tiempoFinal

console.log( `Tiempo de ejecucion: ${duracion} ms`)

})
