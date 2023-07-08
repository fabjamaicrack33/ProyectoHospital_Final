const { sumar } = require('./sumar')


test('Prueba de estres',()=>{
    for(let i=0; i<1000000; i++){
    expect(sumar(2,3)).toBe(5)
    }
    })
