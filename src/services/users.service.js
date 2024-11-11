import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UserService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE)
    }

    getUsers = async () => {
        const users = await this.model.User.find()
        return users
    }

    getUserById = async (id) => {
        const user = await this.model.User.findById(id)
        return user
    }

    postUser = async (data) => {
        const newUser = await this.model.User.create(data)
        return newUser
    }

    patchUser = async (id, data) => {
        const updatedUser = await this.model.User.updateOne({ _id: id }, { $set: data })
        return updatedUser
    }

    putUser = async (id, data) => {
        const updatedUser = await this.model.User.replaceOne({ _id: id }, data)
        return updatedUser
    }

    deleteUser = async (id) => {
        const deletedUser = await this.model.User.deleteOne({ _id: id })
        return deletedUser
    }
}

export default UserService