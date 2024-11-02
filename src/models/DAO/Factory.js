import ProdMemModel from "./ProductsMemMemory.js"
import ProdMongoModel from "./productsMongoMem.js"
import UserMongoModel from "./UsersMongoMem.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new ProdMemModel()
            case "MONGO":
                console.warn("Persistencia en MongoDB.asdsa")
                return {
                    productModel: new ProdMongoModel(),
                    userModel: new UserMongoModel()
                }
            default:
                console.warn("Persistencia en default.")
                return {
                    productModel: new ProdMongoModel(),
                    userModel: new UserMongoModel()
                }
        }
    }
}

export default Factory