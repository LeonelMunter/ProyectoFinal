import express from 'express';
import {getAllMaterials,getMaterialById,createMaterial,updateMaterial,deleteMaterial} from '../controllers/material.js';
const router = express.Router();

// Ruta para obtener todos los materiales
router.get('/', getAllMaterials);

// Ruta para obtener un material por ID
router.get('/:id', getMaterialById);

// Ruta para crear un nuevo material
router.post('/', createMaterial);

// Ruta para actualizar un material existente
router.put('/:id', updateMaterial);

// Ruta para eliminar un material existente
router.delete('/:id', deleteMaterial);

export default router;
