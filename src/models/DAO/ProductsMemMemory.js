class prodMemModel{
    constructor() {
        this.productos = [
        ]
    }

    async getAllProd() {
        try {
            return this.productos
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
    }
    }

    async postProd(data) {
        try {
            if (this.productos.length === 0) {
                data.id = 1
            } else {
                data.id = this.productos[this.productos.length - 1].id + 1
            }
            this.productos.push(data)
            return data;
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }
    }

    async deleteProd(id) {
        try {
            const index = this.productos.findIndex((e) => e.id == id)
            if (index == -1) {
                return "El ID no existe"
            }
            this.productos.splice(index, 1)
            return "El producto fue borrado"
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }
    }
}

export default prodMemModel