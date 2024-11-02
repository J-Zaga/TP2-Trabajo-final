import ProdMemModel from "./ProductsMemMemory.js"
import ProdMongoModel from "./productsMongoMem.js"
import UserMongoModel from "./UsersMongoMem.js"

class Factory {
    static get(persistencia) {
        if (this.instance){
            return this.instance
        }else {
            switch (persistencia) {
                case "MEM":
                    console.warn("Persistencia en memoria del servidor.")
                    this.instance = new ProdMemModel()
                case "MONGO":
                    console.warn("Persistencia en MongoDB")
                    this.instance = {
                        productModel: new ProdMongoModel(),
                        userModel: new UserMongoModel()
                    }
                    break
                default:
                    console.warn("Persistencia en default.")
                    this.instance = {
                    productModel: new ProdMongoModel(),
                    userModel: new UserMongoModel()
                }
                break
            }
            return this.instance
        }
    }
}

export default Factory