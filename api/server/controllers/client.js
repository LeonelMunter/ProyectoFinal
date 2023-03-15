import client from '../models/client'

// GET /client - Obtiene todas las client
export const getAllclients = async (req, res) => {
    try {
        const client = await client.find();
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// get cliente
// GET /client/:id - Obtiene una casa por ID
export const getClientById = async (req, res) => {
    try {
        const clientId = await client.findById(req.params.id);
        res.status(200).json(clientId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST /client - Crea una nueva casa
export const createClient = async (req, res) => {
    const newClient = new client(req.body);
    try {
        await newHouse.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}