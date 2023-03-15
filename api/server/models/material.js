
import mongoose from 'mongoose';
const { Schema } = mongoose;

const materialSchema = new Schema({
    name: { type: String, required: true }, // nombre del material
    description: { type: String, required: true }, // descripción del material
    unitMeasure: { type: String, required: true }, // unidad de medida del material
    costPerUnit: { type: Number, required: true }, // costo por unidad del material
    image: { type: String, required: true } // imagen del material
  });
  

  export default mongoose.model('material', materialSchema);