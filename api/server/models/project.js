
import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true }, // nombre del proyecto
  startDate: { type: Date, default: Date.now }, // fecha de inicio del proyecto
  endDate: { type: Date }, // fecha de finalización del proyecto
  address: { type: String, required: true }, // dirección del proyecto
  client: { type: Schema.Types.ObjectId, ref: 'client' }, // referencia al cliente del proyecto
});

module.exports = mongoose.model('project', projectSchema);