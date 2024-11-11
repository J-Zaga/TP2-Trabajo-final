import Services from "./services.model.mongo.js"
import User from "./users.model.mongo.js"

class Factory{
    static get(persistencia){
        switch (persistencia) {
            case "MONGO":
                console.warn("Persistencia en MongoDB.")
                return { Services, User}
            default:
                console.warn("Persistencia en default.")
                return { Services, User }
        }
    }
}

export default Factory