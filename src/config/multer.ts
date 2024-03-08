import multer from "multer";
import path from "path";







const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./uploads")
    },
    filename:function(req,file,cb){
        const randoName = Math.floor(Math.random()*999999999)
        cb(null, `${randoName}${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})

export default upload