import UserService from "../services/users.service.js"
import { validateObjectId, handleNotFoundError } from "../utils/mongooseValidation.js"

class UsersController {
    constructor() {
        this.userService = new UserService()
    }

    createUser = async (req, res) => {
        if (Object.values(req.body).includes("")) {
            const error = new Error("Todos los campos son obligatorios")
            return res.status(400).json({ msg: error.message })
        }

        try {
            const newUser = await this.userService.postUser(req.body)
            res.json({
                msg: "El usuario se creó correctamente",
                usuario: newUser
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al crear el usuario" })
        }
    }

    getUsers = async (req, res) => {
        try {
            const users = await this.userService.getUsers()
            res.json(users)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al obtener los usuarios" })
        }
    }

    getUserById = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const user = await this.userService.getUserById(id)
            if (!user) return handleNotFoundError("El usuario no existe", res)
            res.json(user)
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al obtener el usuario" })
        }
    }

    patchUser = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const updatedUser = await this.userService.patchUser(id, req.body)
            if (!updatedUser) return handleNotFoundError("El usuario no existe", res)
            res.json({ msg: "El usuario se actualizó correctamente" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al actualizar el usuario" })
        }
    }

    putUser = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const updatedUser = await this.userService.putUser(id, req.body)
            if (!updatedUser) return handleNotFoundError("El usuario no existe", res)
            res.json({ msg: "El usuario se actualizó correctamente" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al actualizar el usuario" })
        }
    }

    deleteUser = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const deletedUser = await this.userService.deleteUser(id)
            if (!deletedUser) return handleNotFoundError("El usuario no existe", res)
            res.json({ msg: "El usuario se eliminó correctamente" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ msg: "Error al eliminar el usuario" })
        }
    }
}

export default UsersController