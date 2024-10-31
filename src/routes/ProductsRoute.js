import ProdController from "../controllers/productsController.js"
import express from "express"

class ProdRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new ProdController()
    }

    start(){
        this.router.get("/prod", this.controller.getProd.bind(this.controller))
        this.router.post("/prod", this.controller.postProd.bind(this.controller))
        this.router.patch("/prod/:id", this.controller.patchProd.bind(this.controller))
        this.router.put("/prod/:id", this.controller.putProd.bind(this.controller))
        this.router.delete("/prod/:id", this.controller.deleteProd.bind(this.controller))

        return this.router
    }
}

export default ProdRoutes