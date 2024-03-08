import { Schema, model } from "mongoose";

type Imagem={
    id:string,
    image:string
}

const photoSchema = new Schema({
    name:{
        type:String
    },
    src:{
        type:String
    }
})


const Image = model("Image", photoSchema)

export default Image