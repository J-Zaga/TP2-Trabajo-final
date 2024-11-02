import ProdMemModel from "./ProductsMemMemory.js"
import ProdMongoModel from "./productsMongoMem.js"
import UserMongoModel from "./UsersMongoMem.js"

class Factory {
    static currentPersistencia
    static instance

    //Tal vez lo complique de mas y en realidad hay formas mejores de hacer esto pero aunque este mal me gusto haber resuelto el problema y me 
    //permitio hacer un singleton por primera vez lo cual fue divertido -Juan

    static get(persistencia) {
        //si se cambia de persistencia se borra el valor de instancia y se permite volver a crear una instancia de model
        if (persistencia !== this.currentPersistencia) {
            this.instance = null
        }
        //si la instancia que entra por parametro es igual a la que esta corriendo no se vuelve a instanciar
        //esta es la parte que no se si es importante prevenir, pero ante la duda decidi evitar que se cree una nueva instancia si no es necesario -Juan
        if (this.instance) {
            return this.instance
        } else {
            switch (persistencia) {
                case "MEM":
                    console.warn("Persistencia en memoria del servidor.")
                    this.instance = new ProdMemModel()
                    break
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
            this.currentPersistencia = persistencia
            return this.instance
        }
    }
}

export default Factory