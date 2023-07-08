var express = require('express');
var router = express.Router();
const { validarCampoNombre, validarCampoEmail, validarCampoContrasenia } = require('./validacion')

/* GET home page. */
router.get('/', function (req, res, next) {
res.render('index', { title: 'Formulario de validacion', nombreError: true, emailError: true, contraseniaError: true });
});

router.post('/validar', function (req, res, next) {
const { nombre, email, contrasenia } = req.body //sintaxis de deconstruccion --> antes const nombre = req.body.nombre
//llamamos a las funciones de validacion.js y devuelven booleanos
const nombreError = validarCampoNombre(nombre)
const emailError = validarCampoEmail(email)
const contraseniaError = validarCampoContrasenia(contrasenia)

if(nombreError && emailError && contraseniaError){//si todas devuelven verdadero
res.send('Formulario valido')
} else {
console.log(nombreError)
res.render('index', { title: 'Formulario de validacion', nombreError, emailError, contraseniaError });
}
});

module.exports = router;