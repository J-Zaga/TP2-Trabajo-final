import { faker } from '@faker-js/faker'

faker.mascotas = {
    nombre: () => faker.helpers.arrayElement([
        'Paseo de perros',
        'Baño para gatos',
        'Entrenamiento avanzado',
        'Consulta veterinaria',
        'Guardería de día',
        'Corte de uñas'
    ]),
    categoria: () => faker.helpers.arrayElement([
        'Paseo',
        'Cuidado',
        'Entrenamiento',
        'Salud',
        'Estética'
    ]),
    precio: () => faker.commerce.price()
}


const generarServicioDeMascota = () => {
    const servicio = {
        nombre: faker.mascotas.nombre(),
        categoria: faker.mascotas.categoria(),
        precio: faker.mascotas.precio()
    }

    return servicio
}

const generarUsuario = () => {
    const usuario = {
        usuario: faker.internet.username(),
        contrasenia: faker.internet.password(),
        rol: faker.helpers.arrayElement(['usuario', 'administrador', 'prestador']) 
    }

    return usuario
}

export default {
    generarServicioDeMascota,
    generarUsuario
}