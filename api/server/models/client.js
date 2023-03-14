
import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: { type: String, required: true }, // Nombre completo del cliente
    phone: { type: String, required: true }, // Número de teléfono del cliente
    address: { type: String, required: true }, // Dirección del cliente
    email: { type: String, required: true }, // Correo electrónico del cliente
    registrationDate: { type: Date, default: Date.now } // Fecha en la que el cliente se registró en la empresa
});

module.exports = mongoose.model('client', clientSchema);