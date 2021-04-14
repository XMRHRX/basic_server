import { createConnection, Connection } from 'typeorm'
import * as devConf from '@/config/dev';
import * as proConf from '@/config/production';

const config = proConf;
console.log(config);

async function runMigration(){
  const conn: Connection = await createConnection(config);
  await conn.runMigrations();
  conn.close();
}


runMigration();
