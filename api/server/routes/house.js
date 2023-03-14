import express from 'express';
import {getAllHouses,getHouseById,createHouse,updateHouse,deleteHouse} from '../controllers/house.js';
const router = express.Router();



// Ruta para obtener todas las casas
router.get('/', getAllHouses);

// Ruta para obtener una casa por ID
router.get('/:id', getHouseById);

// Ruta para crear una nueva casa
router.post('/', createHouse);

// Ruta para actualizar una casa existente
router.put('/:id', updateHouse);

// Ruta para eliminar una casa existente
router.delete('/:id', deleteHouse);