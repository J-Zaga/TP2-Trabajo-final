import express from "express"
import colors from "colors"
import config from "./src/config.js"
import cors from 'cors'
import db from "./src/models/MongoConnection.js"
import servicesRoutes from "./src/routes/services.route.js"
import usersRoutes from "./src/routes/users.route..js" 

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

const PORT = config.PORT

app.listen(PORT, () => {
    console.log(colors.blue("El servidor se está ejecutando en el puerto:", colors.blue.bold(PORT)))
})
