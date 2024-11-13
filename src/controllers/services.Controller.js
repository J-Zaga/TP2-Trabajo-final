import ServicesService from "../services/services.service.js"
import { validateObjectId, handleNotFoundError } from "../utils/mongooseValidation.js"

const servicesService = new ServicesService()

const createService = async (req, res) => {
    if (Object.values(req.body).includes("")) {
        const error = new Error("Todos los campos son obligatorios")

        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const newService = await servicesService.postService(req.body)
        res.json({
            msg: "El servicio se creó correctamente",
            servicio: newService
        })
    } catch (error) {
        console.error('Error al crear el servicio:', error)
        res.status(500).json({ msg: 'Error al crear el servicio' })
    }
}

const getServices = async (req, res) => {
    try {
        const services = await servicesService.getServices()
        res.json(services)
    } catch (error) {
        console.error('Error al obtener los servicios:', error)
        res.status(500).json({ msg: 'Error al obtener los servicios' })
    }
}

const getServiceById = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const service = await servicesService.getServiceById(id)

        if (!service) {
            return handleNotFoundError("El servicio no existe", res)
        }

        res.json(service)
    } catch (error) {
        console.error('Error al obtener el servicio:', error)
        res.status(500).json({ msg: 'Error al obtener el servicio' })
    }
}

const patchService = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const updatedService = await servicesService.patchService(id, req.body)

        if (!updatedService) {
            return handleNotFoundError("El servicio no existe", res)
        }

        res.json({
            msg: "El servicio se actualizó correctamente",
        })
    } catch (error) {
        console.error('Error al actualizar el servicio:', error)
        res.status(500).json({ msg: 'Error al actualizar el servicio' })
    }
}

const putService = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const updatedService = await servicesService.putService(id, req.body)

        if (!updatedService) {
            return handleNotFoundError("El servicio no existe", res)
        }

        res.json({
            msg: "El servicio se actualizó correctamente",
        })
    } catch (error) {
        console.error('Error al actualizar el servicio:', error)
        res.status(500).json({ msg: 'Error al actualizar el servicio' })
    }
}

const deleteService = async (req, res) => {
    const { id } = req.params

    if (validateObjectId(id, res)) return

    try {
        const deletedService = await servicesService.deleteService(id)

        if (!deletedService) {
            return handleNotFoundError("El servicio no existe", res)
        }

        res.json({
            msg: "El servicio se eliminó correctamente"
        })
    } catch (error) {
        console.error('Error al eliminar el servicio:', error)
        res.status(500).json({ msg: 'Error al eliminar el servicio' })
    }
}

export {
    getServiceById,
    createService,
    getServices,
    patchService,
    putService,
    deleteService
}