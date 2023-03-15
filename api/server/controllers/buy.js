import buy from '../models/buy.js';

// GET /buy - Obtiene todas las compras
export const getAllBuys = async (req, res) => {
    try {
        const buys = await buy.find();
        res.status(200).json(buys);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// GET /buy/:id - Obtiene una compra por ID
export const getBuyById = async (req, res) => {
    try {
        const buyId = await buy.findById(req.params.id);
        res.status(200).json(buyId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST /buy - Crea una nueva compra
export const createBuy = async (req, res) => {
    const newBuy = new buy(req.body);
    try {
        await newBuy.save();
        res.status(201).json(newBuy);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PATCH /buy/:id - Actualiza una compra existente
export const updateBuy = async (req, res) => {
    try{
        const { id } = req.params;
        const buyId = await buy.findById(id);
        const {material,amount,purchaseDate,provider,cost}=req.body
        if(!buyId){
            res.status(404).json({message:"la intidad de la compra no existe"})
        }
        buyId.material=material
        buyId.amount=amount
        buyId.purchaseDate=purchaseDate
        buyId.provider=provider
        buyId.cost=cost
        const updateBuys= await buy.save();

        res.status(200).json(updateBuys)

    }catch (error){
        res.status(404).json({ message: error.message });  
    }
}

// DELETE /buy/:id - Elimina una compra existente
export const deleteBuy = async (req, res) => {
    try {
        const {id} = req.params;
        const buyId = await buy.findById(id);
        await buyId.remove();
        res.status(200).json({ message: 'Compra eliminada' });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}



