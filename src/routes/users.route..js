import express from "express"
import { createUser, getUsers, getUserById, patchUser, putUser, deleteUser } from "../controllers/users.controller.js"

const router = express.Router()

router.route('/')
    .post(createUser)
    .get(getUsers)

router.route('/:id')
    .get(getUserById)
    .put(putUser)
    .patch(patchUser)
    .delete(deleteUser)

export default router