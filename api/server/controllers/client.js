import client from '../models/client.js'

// GET /client - Obtiene todas las client
export const getAllClients = async (req, res) => {
    try {
        const client = await client.find();
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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

// PATCH /client/:id - Actualiza una casa existente
export const updateClient = async (req, res) => {
    try{
        const {id}= req.params
        const clientId= await client.findById(id)
        
      if (!clientId) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
        const { name,userName,avatar,phone,address,email,password,registrationDate} = req.body
        clientId.name=name
        clientId.userName=userName
        clientId.avatar=avatar
        clientId.phone=phone
        clientId.address=address
        clientId.email=email
        clientId.password=password
        clientId.registrationDate=registrationDate
       await clientId.save()
       res.status(200).json(employeeId);

    }catch(error){
        res.status(500).json({message: error.message})
    }

        
}

// DELETE /client/:id - Elimina una casa existente
export const deleteClient = async (req, res) => {
    try{
        const {id}= req.params
        const clientId = await client.findById(id)
        if(!clientId){
            return res.status(404).json({ message: "Cliente no encontrado" });

        }
        await clientId.remove()
    }
    catch (error){
        res.status(500).json({ message: error.message });
        
    }
}