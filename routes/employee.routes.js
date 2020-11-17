const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller');

// Muestra todos los empleados
router.get('/findall/', employeeController.findAll);
// Crea un empleado
router.post('/add/', employeeController.create);
// Muestra un empleado por id
router.get('/find/:id', employeeController.findOne);
// Modifica un empleado con id
router.put('/edit/:id', employeeController.update);
// Elimina un empleado con id
router.delete('/delete/:id', employeeController.delete);

module.exports = router