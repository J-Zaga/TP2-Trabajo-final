import ServicesService from "../services/services.service.js"
import { validateObjectId, handleNotFoundError } from "../utils/mongooseValidation.js"

class ServicesController {
    constructor() {
        this.servicesService = new ServicesService()
    }

    createService = async (req, res) => {
        if (Object.values(req.body).includes("")) {
            const error = new Error("Todos los campos son obligatorios")
            return res.status(400).json({ msg: error.message })
        }

        try {
            const newService = await this.servicesService.postService(req.body)
            res.json({
                msg: "El servicio se creó correctamente",
                servicio: newService
            })
        } catch (error) {
            console.error('Error al crear el servicio:', error)
            res.status(500).json({ msg: 'Error al crear el servicio' })
        }
    }

    getServices = async (req, res) => {
        try {
            const services = await this.servicesService.getServices()
            res.json(services)
        } catch (error) {
            console.error('Error al obtener los servicios:', error)
            res.status(500).json({ msg: 'Error al obtener los servicios' })
        }
    }

    getServiceById = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const service = await this.servicesService.getServiceById(id)

            if (!service) {
                return handleNotFoundError("El servicio no existe", res)
            }

            res.json(service)
        } catch (error) {
            console.error('Error al obtener el servicio:', error)
            res.status(500).json({ msg: 'Error al obtener el servicio' })
        }
    }

    patchService = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const updatedService = await this.servicesService.patchService(id, req.body)

            if (!updatedService) {
                return handleNotFoundError("El servicio no existe", res)
            }

            res.json({ msg: "El servicio se actualizó correctamente" })
        } catch (error) {
            console.error('Error al actualizar el servicio:', error)
            res.status(500).json({ msg: 'Error al actualizar el servicio' })
        }
    }

    putService = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const updatedService = await this.servicesService.putService(id, req.body)

            if (!updatedService) {
                return handleNotFoundError("El servicio no existe", res)
            }

            res.json({ msg: "El servicio se actualizó correctamente" })
        } catch (error) {
            console.error('Error al actualizar el servicio:', error)
            res.status(500).json({ msg: 'Error al actualizar el servicio' })
        }
    }

    deleteService = async (req, res) => {
        const { id } = req.params

        if (validateObjectId(id, res)) return

        try {
            const deletedService = await this.servicesService.deleteService(id)

            if (!deletedService) {
                return handleNotFoundError("El servicio no existe", res)
            }

            res.json({ msg: "El servicio se eliminó correctamente" })
        } catch (error) {
            console.error('Error al eliminar el servicio:', error)
            res.status(500).json({ msg: 'Error al eliminar el servicio' })
        }
    }
}

export default ServicesController