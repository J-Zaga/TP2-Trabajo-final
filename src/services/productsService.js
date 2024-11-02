import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class ProdService{

    constructor(){
        this.model = Factory.get(config.PERSISTENCE)
    }

    getProd = async () => {
        const prod = await this.model.productModel.getProd()
        return prod
    }
    
    postProd = async (data) => {
        const newProd = await this.model.productModel.postProd(data)
        return newProd
    }

    patchProd = async (id, data) => {
        const update = await this.model.productModel.patchProd(id,data)
        return update
    }

    putProd = async (id, data) => {
        const update = await this.model.productModel.putProd(id, data)
        return update
    }

    deleteProd = async (id) => {
        const deleteItem = await this.model.productModel.deleteProd(id)
        return deleteItem
    }
}

export default ProdService