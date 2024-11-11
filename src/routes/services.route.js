import express from "express"
import { createService, getServices, getServiceById, patchService, putService, deleteService } from "../controllers/services.controller.js"

const router = express.Router()

router.route('/')
    .post(createService)
    .get(getServices)

router.route('/:id')
    .get(getServiceById)
    .put(putService)
    .patch(patchService)
    .delete(deleteService)

export default router 