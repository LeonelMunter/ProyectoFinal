import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String, required: true }, // nombre del enpleado
    userName: { type: String, required: true }, // nombre de usuario del enpleado
    avatar: { type: String, required: true }, // avatar del enpleado
    phone: { type: String, required: true }, // teléfono del enpleado
    email:{ type: String, required: true }, // email del enpleado
    password: { type: String, required: true }, // contraseña del enpleado
    role: { type: String, required: true }, // rol del enpleado
  });
  

  export default mongoose.model('employee', employeeSchema);