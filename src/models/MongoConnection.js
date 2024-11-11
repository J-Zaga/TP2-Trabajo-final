import mongoose from "mongoose"
import colors from "colors"
import dotenv from "dotenv"

dotenv.config()

export const db = async () => {
    try {
        const db = await mongoose.connect(process.env.STRCDEV, {
            dbName: process.env.NAMEBASEDEV, 
        })
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(colors.cyan("MongoDB se conectó correctamente", url))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default db