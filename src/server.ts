import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { connMONGO } from './instances/mongodb';
import routerImage from './routes/image-routes';



dotenv.config();

const server = express();


server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(express.json())

server.use("/pictures", routerImage)

connMONGO()

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);