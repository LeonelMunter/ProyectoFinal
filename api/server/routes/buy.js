import express from 'express';
import {getAllBuys,getBuyById,createBuy,updateBuy,deleteBuy} from '../controllers/buy.js';
const router= express.Router()

// Ruta para obtener todas las compras
router.get('/',getAllBuys)

// Ruta para obtener una compra por ID
router.get('/:id',getBuyById)

// Ruta para crear una nueva compra
router.post('/',createBuy)

// Ruta para actualizar una compra existente
router.put('/:id',updateBuy)

// Ruta para eliminar una compra existente
router.delete('/:id',deleteBuy)

export default router