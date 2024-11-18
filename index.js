import express from "express"
import colors from "colors"
import config from "./src/config.js"
import db from "./src/models/MongoConnection.js"
import ServicesRoutes from "./src/routes/services.route.js"
import UsersRoutes from "./src/routes/users.route..js" 

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

db()

// Rutas
app.use("/servicios", new ServicesRoutes().start())
app.use("/usuarios", new UsersRoutes().start()) 

const PORT = config.PORT

app.listen(PORT, () => {
    console.log(colors.blue("El servidor se está ejecutando en el puerto:", colors.blue.bold(PORT)))
})
