
import express from 'express';
import house from '../models/house.js';

// GET /houses - Obtiene todas las casas
export const getAllHouses = async (req, res) => {
    try {
        const houses = await house.find();
        res.status(200).json(houses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET /houses/:id - Obtiene una casa por ID
export const getHouseById = async (req, res) => {
    try {
        const houses = await house.findById(req.params.id);
        res.status(200).json(houses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST /houses - Crea una nueva casa
export const createHouse = async (req, res) => {
    const newHouse = new house(req.body);
    try {
        await newHouse.save();
        res.status(201).json(newHouse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PATCH /houses/:id - Actualiza una casa existente
export const updateHouse = async (req, res) => {
    try {
      const { id } = req.params;
      const house = await house.findById(id);
  
      if (!house) {
        return res.status(404).json({ message: "Casa no encontrada" });
      }
  
      // Actualizar la casa con los nuevos datos
      const { 
        name,
        propertyType,
        numRooms,
        numBathrooms,
        squareMeters,
        surfaceArea,
        price,
        plumbing,
        roofing,
        walls,
        openings,
        doors,
        project

       } = req.body;
        house.name = name;
        house.propertyType = propertyType;
        house.numRooms = numRooms;
        house.numBathrooms = numBathrooms;
        house.squareMeters = squareMeters;
        house.surfaceArea = surfaceArea;
        house.price = price;
        house.plumbing = plumbing;
        house.roofing = roofing;
        house.walls = walls;
        house.openings = openings;
        house.doors = doors;
        house.project = project;

      await house.save();
      res.json({ message: "Casa actualizada exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error al actualizar la casa" });
    }
};

// DELETE /houses/:id - Elimina una casa existente
export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedHouse = await house.findByIdAndDelete(id);

    if (!deletedHouse) {
      return res.status(404).json({ message: 'La casa no existe' });
    }

    return res.status(200).json({ message: 'Casa eliminada correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la casa', error });
  }
};

