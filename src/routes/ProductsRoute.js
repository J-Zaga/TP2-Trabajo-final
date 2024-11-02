import ProdController from "../controllers/productsController.js"
import UserController from "../controllers/usersController.js"
import express from "express"

class Routes{
    constructor(){
        this.router = express.Router()
        this.prodController = new ProdController()
        this.userController = new UserController()
    }

    start(){
        this.router.get("/prod", this.prodController.getProd)
        this.router.post("/prod", this.prodController.postProd)
        this.router.patch("/prod/:id", this.prodController.patchProd)
        this.router.put("/prod/:id", this.prodController.putProd)
        this.router.delete("/prod/:id", this.prodController.deleteProd)
        this.router.get("/user", this.userController.getUser)
        this.router.post("/user", this.userController.postUser)
        this.router.patch("/user/:id", this.userController.patchUser)
        this.router.put("/user/:id", this.userController.putUser)
        this.router.delete("/user/:id", this.userController.deleteUser)
        
        return this.router
    }
}

export default Routes