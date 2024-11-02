import express from "express"
import Routes from "./routes/routes.js"
import MongoConnection from "./models/MongoConnection.js"
import config from "./config.js"

//Para quien descargue esto, el archivo config no viene incluido en github asique no te va andar si no lo agregas manualmente -Juan

const app = express()
const PORT = config.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new Routes().start())

await MongoConnection.connect()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))