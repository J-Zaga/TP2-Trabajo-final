import express from "express"
import colors from "colors"
import config from "./src/config.js"
import db from "./src/models/MongoConnection.js"
import servicesRoutes from "./src/routes/services.route.js"
import usersRoutes from "./src/routes/users.route..js" 

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

db()

// Rutas
app.use("/servicios", servicesRoutes)
app.use("/usuarios", usersRoutes) 

const PORT = config.PORT

app.listen(PORT, () => {
    console.log(colors.blue("El servidor se está ejecutando en el puerto:", colors.blue.bold(PORT)))
})
