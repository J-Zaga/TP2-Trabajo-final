import Factory from "../models/DAO/Factory.js";
import config from "../config.js";

class ServicesService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE)
    }

    getServices = async () => {
        const services = await this.model.Services.find()
        return services;
    }

    getServiceById = async (id) => {
        const service = await this.model.Services.findById(id)
        return service
    }

    postService = async (data) => {
        const newService = await this.model.Services.create(data)
        return newService;
    }

    patchService = async (id, data) => {
        const updatedService = await this.model.Services.updateOne({ _id: id }, { $set: data })
        return updatedService;
    }
    
    putService = async (id, data) => {
        const updatedService = await this.model.Services.replaceOne({ _id: id }, data)
        return updatedService;
    }

    deleteService = async (id) => {
        const deletedService = await this.model.Services.deleteOne({ _id: id })
        return deletedService
    }
}

export default ServicesService;