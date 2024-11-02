import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UserService{

    constructor(){
        this.model = Factory.get(config.PERSISTENCE)
    }

    getUser = async () => {
        const user = await this.model.userModel.getUser()
        return user
    }
    
    postUser = async (data) => {
        const newUser = await this.model.userModel.postUser(data)
        return newUser
    }

    patchUser = async (id, data) => {
        const update = await this.model.userModel.patchUser(id,data)
        return update
    }

    putUser = async (id, data) => {
        const update = await this.model.userModel.putUser(id, data)
        return update
    }

    deleteUser = async (id) => {
        const deleteUser = await this.model.userModel.deleteUser(id)
        return deleteUser
    }
}

export default UserService