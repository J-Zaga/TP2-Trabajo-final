import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from 'cors'
import db from "./models/MongoConnection.js"
import servicesRoutes from "./routes/services.route.js"
import usersRoutes from "./routes/users.route..js" 

dotenv.config()

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

db()

const whitelist = [process.env.FRONTEND_URL, undefined]
const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}

app.use(cors(corsOptions))

// Rutas
app.use("/servicios", servicesRoutes)
app.use("/usuarios", usersRoutes) 

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(colors.blue("El servidor se está ejecutando en el puerto:", colors.blue.bold(PORT)))
})

console.log(process.env.MONGO_URI)