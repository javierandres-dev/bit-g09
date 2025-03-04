import mongoose from 'mongoose';

class ConexionMongodb {
  constructor() {
    this.conexion();
  }

  async conexion() {
    try {
      const stringDeConexion = process.env.MONGODB_ATLAS;
      await mongoose.connect(stringDeConexion);
      console.log('Conectado a la base de datos');
    } catch (error) {
      console.log(
        `No se estableció conexión a la base de datos\nError: ${error}`
      );
    }
  }
}

export default new ConexionMongodb();
