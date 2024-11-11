import Services from "./services.model.mongo.js"
import User from "./users.model.mongo.js"

class Factory{
    static currentPersistencia
    static instance
    static get(persistencia){
        if (this.instance) {
            return this.instance
        }else{
        switch (persistencia) {
            
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                this.instance = { Services, User}
                break;
            default:
                console.warn("Persistencia en default.")
                this.instance = { Services, User }
        }
        return this.instance
        
    }
}
}

export default Factory