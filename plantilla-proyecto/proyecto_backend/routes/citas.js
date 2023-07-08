var express = require('express');
var router = express.Router();
const { connection } = require('../database/conexion.js')

router.get('/', function (req, res, next) {
    connection.query('SELECT cm.id,cm.fecha, cm.id_paciente, mas.nombre as nombre_paciente, med.nombre, med.apellido, med.consultorio FROM cita_medica cm, pacientes mas, medicos med WHERE cm.id_paciente = mas.cedula AND cm.id_medico= med.cedula', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('citas', { layout:'main2' ,title: 'citas', citas: results, opcion: 'disabled', estado: true })
        }   //renderizar 
    });
});

router.get('/enviar/:clave', function (req, res, next) {
    const clave = req.params.clave;
    connection.query('SELECT cm.id,cm.fecha, cm.id_paciente, mas.nombre as nombre_paciente, med.nombre, med.apellido, med.consultorio FROM cita_medica cm, pacientes mas, medicos med WHERE cm.id_paciente = mas.cedula AND cm.id_medico= med.cedula', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('citas', {layout:'main2', title: 'citas', claveSeleccionada: clave, citas: results, opcion: 'disabled', estado: false })
        }   //renderizar 
    });
});


router.get('/agregar-cita', function (req, res, next) {
    connection.query('SELECT cedula FROM pacientes', (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            connection.query('SELECT especialidad FROM medicos', (error, results2) => {
                if (error) {
                    console.log("Error en la consulta", error)
                    res.status(500).send("Error en la consulta")
                } else {
                    res.render('registro-citas', { layout: 'registro', pacientes: results, medicos: results2 })
                }
            });
        }
    });
});

router.post('/actualizar/:cedula', (req, res) => {
    const cedula = req.params.cedula;
    const fecha = req.body.fecha;
    connection.query(`UPDATE cita_medica SET fecha='${fecha}' WHERE id=${cedula}`, (error, result) => {
        if (error) {
            console.log("Ocurrio un error en la ejecución", error)
            res.status(500).send("Error en la consulta");
        } else {
            res.redirect('/citas');
        }
    });
})

router.post('/agregar', function (req, res, next) {
    const cedula = req.body.cedula;
    const fecha = req.body.fecha;
    const especialidad = req.body.especialidad;
    connection.query(`SELECT cedula FROM medicos WHERE especialidad='${especialidad}'`, (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            let cedulaMedico = results[0].cedula
            connection.query(`INSERT INTO cita_medica (id_paciente, id_medico, fecha) VALUES (${cedula},${cedulaMedico}, '${fecha}')`, (error, result) => {
                if (error) {
                    console.log("Ocurrio un error en la ejecución", error)
                    res.status(500).send("Error en la consulta");
                } else {
                    res.redirect('/citas');
                }
            });
        }
    });
})
//eliminar citas
router.get('/eliminar/:id', function (req, res, next) {
    const id = req.params.id
    connection.query(`DELETE FROM cita_medica WHERE id=${id}`, (error, results) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.redirect('/citas')
        }
    });
});

module.exports = router;