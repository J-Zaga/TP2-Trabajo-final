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
        this.router.get("/prod", this.prodController.getProd.bind(this.controller))
        this.router.post("/prod", this.prodController.postProd.bind(this.controller))
        this.router.patch("/prod/:id", this.prodController.patchProd.bind(this.controller))
        this.router.put("/prod/:id", this.prodController.putProd.bind(this.controller))
        this.router.delete("/prod/:id", this.prodController.deleteProd.bind(this.controller))
        this.router.get("/user", this.userController.getUser.bind(this.controller))
        this.router.post("/user", this.userController.postUser.bind(this.controller))
        this.router.patch("/user/:id", this.userController.patchUser.bind(this.controller))
        this.router.put("/user/:id", this.userController.putUser.bind(this.controller))
        this.router.delete("/user/:id", this.userController.deleteUser.bind(this.controller))
        
        return this.router
    }
}

export default Routes