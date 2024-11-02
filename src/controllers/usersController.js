import UserService from "../services/usersService.js"

class UserController {
  constructor() {
    this.service = new UserService()
  }

  getUser = async (req, res) => {
    const user = await this.service.getUser()
    res.send(user)
  }

  postUser = async (req, res) => {
    const data = req.body
    const newUser = await this.service.postUser(data)
    res.send(newUser)
  }

  patchUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.patchUser(id, data)
    res.send(update)
  }

  putUser = async (req, res) => {
    const { id } = req.params
    const data = req.body
    const update = await this.service.putUser(id, data)
    res.send(update)
  }

  deleteUser = async (req, res) => {
    const { id } = req.params
    const deleteUser = await this.service.deleteUser(id)
    res.send(deleteUser)
  }

}

export default UserController