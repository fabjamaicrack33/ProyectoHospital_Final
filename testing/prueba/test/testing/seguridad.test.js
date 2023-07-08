const { sumar } = require('./sumarAutenticacion')
//credenciales sean validas
test('credenciales sean validas',()=>{
expect(()=> sumar(2,3,"desarrollador","backend1234")).not.toThrow()
})
// Credenciales no sean validas
test('Credenciales no sean validas',()=>{
expect(()=> sumar(2,3,"dvnjwn","backendfreotr")).toThrow()
})