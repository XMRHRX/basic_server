import express, { Express }from "express";
import cors from 'cors';
import { ConnectionOptions, createConnection } from 'typeorm';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';

import { RegisterRoutes } from "@/routes";
import { SensorHandler } from '@/component';
// import * as swaggerDocument from './swagger.json' //https: //sean-bradley.medium.com/add-swagger-ui-to-existing-nodejs-typescript-api-882ca7aded90
import { EnvironmentService } from '@/service';



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
    // app.use(
      // "/docs",
      // swaggerUi.serve,
      // swaggerUi.setup(undefined, {
        // swaggerUrl: './swagger.json',
        // swaggerOptions: {
          // url: 'swagger.json'
          // validatorUrl: null
        // }
      // })
    // );

    //console.log(typeormConfig);
    await createConnection(typeormConfig);
    await EnvironmentService.init();
    await SensorHandler.init();
    RegisterRoutes(app);

    return resolve(app);
  });
}



