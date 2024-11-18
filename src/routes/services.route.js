import ServicesController from "../controllers/services.Controller.js"
import express from "express"

class ServicesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new ServicesController()
    }

    start() {
        this.router.get("/", this.controller.getServices)
        this.router.post("/", this.controller.createService)
        this.router.get("/:id", this.controller.getServiceById)
        this.router.put("/:id", this.controller.putService)
        this.router.patch("/:id", this.controller.patchService)
        this.router.delete("/:id", this.controller.deleteService)

        return this.router
    }
}

export default ServicesRoutes