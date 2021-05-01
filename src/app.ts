import express, { Express }from "express";
import cors from 'cors';
import { ConnectionOptions, createConnection } from 'typeorm';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from "@/routes";



export default function AppInit(typeormConfig: ConnectionOptions): Promise<Express> {
  const app = express();
  return new Promise(async (resolve, reject)=>{
    app.use(cors({
      origin: '*',
      methods: ['GET', 'POST'],
      //allowedHeaders: ['Content-Type',  'Authorization'],
    }));
    app.use(
      bodyParser.urlencoded({
        extended:  true,
      })
    );
    app.use(bodyParser.json());
    app.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerUrl: './swagger.json',
        swaggerOptions: {
          //url: 'swagger.json'
          validatorUrl: null
        }
      })
    );

    //console.log(typeormConfig);
    await createConnection(typeormConfig);

    RegisterRoutes(app);

    return resolve(app);
  });
}



