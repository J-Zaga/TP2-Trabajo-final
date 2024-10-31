import ProdMemModel from "./ProductsMemMemory.js"
import ProdMongoModel from "./productsMongoMem.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new ProdMemModel()
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return new ProdMongoModel()
            default:
                console.warn("Persistencia en default.")
                return new ProdMongoModel()
        }
    }
}

export default Factory