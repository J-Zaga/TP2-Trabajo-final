import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class UserMongoModel{
    constructor(){ 
    }

    getUser = async () => {
        const users = await MongoConnection.db.collection("users").find({}).toArray()
        return users
    }
    
    postUser = async (data) => {
        const newUser = await MongoConnection.db.collection("users").insertOne(data)
        return newUser
    }

    patchUser = async (id, data) => {
        const updatedUser = await MongoConnection.db.collection("users").updateOne(
            { "_id": new ObjectId(String(id)) }, { $set: data })
        return updatedUser
    }

    putUser = async (id, data) => {
        const updatedUser = await MongoConnection.db.collection("users").replaceOne(
            { "_id": new ObjectId(String(id)) }, data)
        return updatedUser
    }

    deleteUser = async (id) => {
        await MongoConnection.db.collection("users").deleteOne({ "_id": new ObjectId(String(id))})
    }
}

export default UserMongoModel