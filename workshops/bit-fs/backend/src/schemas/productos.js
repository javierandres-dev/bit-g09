import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('productos', productoSchema);
