import express from "express"
import Routes from "./routes/productsRoute.js"
import MongoConnection from "./models/MongoConnection.js"
import config from "./config.js"

const app = express()
const PORT = config.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new Routes().start())

await MongoConnection.connect()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))