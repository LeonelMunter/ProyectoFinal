
import mongoose from 'mongoose';
const { Schema } = mongoose;

const buySchema = new Schema({
    material: { type: Schema.Types.ObjectId, ref: 'material' }, // Referencia al material comprado
    amount: { type: Number, required: true }, // Cantidad comprada
    purchaseDate: { type: Date, default: Date.now }, // Fecha de la compra
    provider: { type: String, required: true }, // Nombre del proveedor
    cost: { type: Number, required: true } // Costo total de la compra
});

export default mongoose.model('buy', buySchema);