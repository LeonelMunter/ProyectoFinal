import mongoose from 'mongoose';
const { Schema } = mongoose;


const homeSchema = new Schema({
    //nombre
    name: { type: String, required: true }, // Nombre de la propiedad
    propertyType: { type: String, required: true }, // Tipo de propiedad (casa, apartamento, terreno, etc.)
    numRooms: { type: Number, required: true }, // Número de habitaciones
    numBathrooms: { type: Number, required: true }, // Número de baños
    squareMeters: { type: Number, required: true }, // Tamaño de la propiedad en metros cuadrados
    surfaceArea: { type: String, required: true }, // Superficie que ocupa la propiedad
    price: { type: Number, required: true }, // Precio de venta de la propiedad
    plumbing: { type: String, required: true }, // Especificaciones técnicas de las cañerías
    roofing: { type: String, required: true }, // Especificaciones técnicas del techo
    walls: { type: String, required: true }, // Especificaciones técnicas de las paredes
    openings: { type: String, required: true }, // Especificaciones técnicas de las aberturas
    doors: { type: String, required: true }, // Especificaciones técnicas de las puertas
    project: { type: Schema.Types.ObjectId, ref: 'project' } // Referencia al proyecto al que pertenece la propiedad
            
  });
  
  module.exports = mongoose.model('home', homeSchema);