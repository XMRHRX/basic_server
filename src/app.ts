import express, { Express }from "express";
import cors from 'cors';
import { ConnectionOptions, createConnection } from 'typeorm';
import bodyParser from "body-parser";
import { RegisterRoutes } from "@/routes";

import { CrawlerService } from '@/service/crawlerServices';


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

    //console.log(typeormConfig);
    await createConnection(typeormConfig);
    CrawlerService.init();

    RegisterRoutes(app);

    return resolve(app);
  });
}



