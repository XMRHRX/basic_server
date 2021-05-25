import 'module-alias/register';
import { Express } from 'express';
import * as devConf from '@/config/dev';
import * as proConf from '@/config/production';
import AppInit from "@/app";

const mode = process.env.mode;
const port = process.env.PORT || 3000;
const typeormConfig = proConf;
	//( mode == 'dev' ? devConf : proConf);

AppInit(typeormConfig.default)
.then((app: Express)=>{
  app.listen(port,  () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
})
.catch((e)=>{
  console.error(e);
});
