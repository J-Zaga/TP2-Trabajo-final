import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contrasenia: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        enum: ['usuario', 'administrador', 'prestador'],
        default: 'usuario'
    }
})
const User = mongoose.model('User', userSchema)
export default User