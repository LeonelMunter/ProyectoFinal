import express from 'express'

import {getAllClients,getClientById,createClient,updateClient,deleteClient} from '../controllers/client.js';

const router = express.Router();

// Ruta para obtener todos los clientes
router.get('/', getAllClients);

// Ruta para obtener un cliente por ID
router.get('/:id', getClientById);

// Ruta para crear un nuevo cliente
router.post('/', createClient);

// Ruta para actualizar un cliente existente
router.put('/:id', updateClient);

// Ruta para eliminar un cliente existente
router.delete('/:id', deleteClient);

export default router;