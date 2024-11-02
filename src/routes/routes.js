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
        //Realmente no estoy seguro si esta bien tener todas las rutas aca, pero me parecia mas natural exportar todas las rutas juntas
        //tal vez esta mal por eso dejo este comentario como recordatorio para preguntar -Juan
        //Product routes
        this.router.get("/prod", this.prodController.getProd)
        this.router.post("/prod", this.prodController.postProd)
        this.router.patch("/prod/:id", this.prodController.patchProd)
        this.router.put("/prod/:id", this.prodController.putProd)
        this.router.delete("/prod/:id", this.prodController.deleteProd)

        //User routes
        this.router.get("/user", this.userController.getUser)
        this.router.post("/user", this.userController.postUser)
        this.router.patch("/user/:id", this.userController.patchUser)
        this.router.put("/user/:id", this.userController.putUser)
        this.router.delete("/user/:id", this.userController.deleteUser)
        
        return this.router
    }
}

export default Routes