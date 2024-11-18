import { expect } from "chai"
import supertest from "supertest"
import generator from "../utils/generator.js"

const urlBase = supertest("http://localhost:8080")

// TEST DE INTEGRACIÓN PARA USUARIOS

describe("Test de usuarios", () => {
    let createdUserId
    const data = generator.generarUsuario()

    it("GET usuarios - Obtener todos los usuarios", async () => {
        const response = await urlBase.get("/usuarios")
        expect(response.status).to.equal(200)
    })

    it("POST usuarios - Crear un nuevo usuario", async () => {
        const response = await urlBase.post("/usuarios").send(data)
        expect(response.status).to.equal(200)
        createdUserId = response.body.usuario._id
    })

    it("GET usuarios/:id - Obtener un usuario por ID", async () => {
        const response = await urlBase.get(`/usuarios/${createdUserId}`)
        expect(response.status).to.equal(200)
    })

    it("PATCH usuarios/:id - Actualizar parcialmente un usuario por ID", async () => {
        const patchData = { contraseña: "nuevaContraseña123" }
        const response = await urlBase.patch(`/usuarios/${createdUserId}`).send(patchData)
        expect(response.status).to.equal(200)
    })

    it("PUT usuarios/:id - Actualizar completamente un usuario por ID", async () => {
        const updatedData = { usuario: "Actualizado", contraseña: "superSegura", rol: "administrador" }
        const response = await urlBase.put(`/usuarios/${createdUserId}`).send(updatedData)
        expect(response.status).to.equal(200)
    })

    it("DELETE usuarios/:id - Eliminar un usuario por ID", async () => {
        const response = await urlBase.delete(`/usuarios/${createdUserId}`)
        expect(response.status).to.equal(200)
    })
})