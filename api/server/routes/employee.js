import express from 'express'
import {getAllEmployees,getEmployeeById,createEmployee,updateEmployee,deleteEmployee} from '../controllers/employee.js';
const router= express.Router()

// Ruta para obtener todos los empleados
router.get('/',getAllEmployees)

// Ruta para obtener un empleado por ID
router.get('/:id',getEmployeeById)

// Ruta para crear un nuevo empleado
router.post('/',createEmployee)

// Ruta para actualizar un empleado existente
router.put('/:id',updateEmployee)

// Ruta para eliminar un empleado existente
router.delete('/:id',deleteEmployee)





export default router