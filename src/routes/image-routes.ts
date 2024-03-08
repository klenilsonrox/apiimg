import { Router } from "express";
import { createImage, getImages } from "../controllers/PictureControler";
import upload from "../config/multer";

const routerImage = Router();



routerImage.post("/", upload.single("file"), createImage);
routerImage.get("/", getImages);

export default routerImage;
