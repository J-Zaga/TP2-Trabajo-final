import UserService from "../services/users.service.js"
import { validateObjectId, handleNotFoundError } from "../utils/mongooseValidation.js"

const userService = new UserService()

const createUser = async (req, res) => {
    if (Object.values(req.body).includes("")) {
        const error = new Error("Todos los campos son obligatorios")
        return res.status(400).json({ msg: error.message })
    }

    try {
        const newUser = await userService.postUser(req.body)
        res.json({ msg: "El usuario se creó correctamente",
            usuario: newUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al crear el usuario" })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al obtener los usuarios" })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const user = await userService.getUserById(id)
        if (!user) return handleNotFoundError("El usuario no existe", res)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al obtener el usuario" })
    }
}

const patchUser = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const updatedUser = await userService.patchUser(id, req.body)
        if (!updatedUser) return handleNotFoundError("El usuario no existe", res)
        res.json({ msg: "El usuario se actualizó correctamente" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al actualizar el usuario" })
    }
}

const putUser = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const updatedUser = await userService.putUser(id, req.body)
        if (!updatedUser) return handleNotFoundError("El usuario no existe", res)
        res.json({ msg: "El usuario se actualizó correctamente" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al actualizar el usuario" })
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const deletedUser = await userService.deleteUser(id)
        if (!deletedUser) return handleNotFoundError("El usuario no existe", res)
        res.json({ msg: "El usuario se eliminó correctamente" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Error al eliminar el usuario" })
    }
}

export {
    createUser,
    getUsers,
    getUserById,
    patchUser,
    putUser,
    deleteUser
} 