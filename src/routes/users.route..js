import express from "express"
import UsersController from "../controllers/users.controller.js"

class UsersRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new UsersController()
    }

    start() {
        this.router.get("/", this.controller.getUsers)
        this.router.post("/", this.controller.createUser)
        this.router.get("/:id", this.controller.getUserById)
        this.router.patch("/:id", this.controller.patchUser)
        this.router.put("/:id", this.controller.putUser)
        this.router.delete("/:id", this.controller.deleteUser)

        return this.router
    }
}

export default UsersRoutes