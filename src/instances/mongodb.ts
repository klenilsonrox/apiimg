import mongoose from "mongoose";
import {config} from "dotenv";
config()


const MONGO_URL =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@images.mqeqnrj.mongodb.net/`


export const connMONGO= async ()=>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("conectado ao MONGO Db")
    }catch(erro){
        console.log(erro)
    }
}