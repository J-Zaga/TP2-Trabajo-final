import generator from "../utils/generator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")

//TEST DE INTEGRACIÓN

describe('Test de servicios', () => {
    let createdServiceId
    const data = generator.generarServicioDeMascota()

    it('GET servicios - Obtener todos los servicios', async () => {
        const response = await urlBase.get("/servicios")
        expect(response.status).to.equal(200)
    })

    it('POST servicios - Crear un nuevo servicio', async () => {
        const response = await urlBase.post("/servicios").send(data)
        expect(response.status).to.equal(200)
        createdServiceId = response.body.servicio._id
    })

    it("GET servicios/:id - Obtener un servicio por ID", async () => {
        const response = await urlBase.get(`/servicios/${createdServiceId}`)
        expect(response.status).to.equal(200)
    })

    it("PATCH servicios/:id - Actualizar parcialmente un servicio por ID", async () => {
        const patchData = { precio: 100.50 }
        const response = await urlBase.patch(`/servicios/${createdServiceId}`).send(patchData)
        expect(response.status).to.equal(200)
    })

    it("PUT servicios/:id - Actualizar completamente un servicio por ID", async () => {
        const updatedData = {nombre: "Servicio actualizado", categoria: "Paseo", precio: 200.99 }
        const response = await urlBase.put(`/servicios/${createdServiceId}`).send(updatedData)
        expect(response.status).to.equal(200);
    })

    it("DELETE servicios/:id - Eliminar un servicio por ID", async () => {
        const response = await urlBase.delete(`/servicios/${createdServiceId}`)
        expect(response.status).to.equal(200)
    })

})