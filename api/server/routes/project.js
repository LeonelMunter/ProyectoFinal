import express from 'express';
import {getAllProjects,getProjectById,createProject,updateProject,deleteProject} from '../controllers/project.js';

const router = express.Router();

// Ruta para obtener todos los proyectos
router.get('/', getAllProjects);

// Ruta para obtener un proyecto por ID
router.get('/:id', getProjectById);

// Ruta para crear un nuevo proyecto

router.post('/', createProject);

// Ruta para actualizar un proyecto existente
router.put('/:id', updateProject);

// Ruta para eliminar un proyecto existente
router.delete('/:id', deleteProject);


export default router;