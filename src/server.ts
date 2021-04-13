import 'module-alias/register';
import { Express } from 'express';
import * as config from '@/config';
import AppInit from "@/app";

const port = process.env.PORT || 3000;
const typeormConfig = config;

AppInit(typeormConfig.default)
.then((app: Express)=>{
  app.listen(port,  () =>
    console.log(`Example app listening at http: //localhost: ${port}`)
  );
})
.catch((e)=>{
  console.error(e);
});
