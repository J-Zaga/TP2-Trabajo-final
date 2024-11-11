import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

// Carga las variables de entorno
dotenv.config();

export const db = async () => {
    try {
        // Usa la variable de entorno para la conexión
        const db = await mongoose.connect(process.env.STRCDEV, {
            dbName: process.env.NAMEBASEDEV, // Define la base de datos específica
        });
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(colors.cyan("MongoDB se conectó correctamente", url));
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default db;