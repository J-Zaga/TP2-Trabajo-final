import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class ProdMongoModel{
    constructor(){ 
    }

    getProd = async () => {
        const products = await MongoConnection.db.collection("products").find({}).toArray()
        return products
    }
    
    postProd = async (data) => {
        const newProduct = await MongoConnection.db.collection("products").insertOne(data)
        return newProduct
    }

    patchProd = async (id, data) => {
        const updatedProduct = await MongoConnection.db.collection("products").updateOne(
            { "_id": new ObjectId(String(id)) }, { $set: data })
        return updatedProduct
    }

    putProd = async (id, data) => {
        const updatedProduct = await MongoConnection.db.collection("products").replaceOne(
            { "_id": new ObjectId(String(id)) }, data)
        return updatedProduct;
    }

    deleteProd = async (id) => {
        await MongoConnection.db.collection("products").deleteOne({ "_id": new ObjectId(String(id))})
    }
}

export default ProdMongoModel