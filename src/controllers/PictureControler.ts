import Image from "../models/Image";

import express, { Request, Response } from "express";

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = await Image.find();
    return res.status(200).json(images);
  } catch (error) {
    console.log(error);
    return res.status(500).json({erro:error})
  }
};

export const createImage = async (req: Request, res: Response) => {
  try {
    const {name}=req.body
    
    const picture = new Image({
        name,
        src:req.file?.path
    })
    
    await picture.save()

    return res.status(201).json({picture, msg:"imagem salva com sucesso"});
  } catch (error) {
    console.log(error);
  }
};
