import 'module-alias/register';
import { createConnection, Connection } from 'typeorm'
import * as devConf from '../src/config/dev';
import * as proConf from '../src/config/production';
import * as migratationConf from '../src/config/migration';

let config = migratationConf.default;
console.log(config);

async function runMigration(){
  const conn: Connection = await createConnection(config);
  await conn.runMigrations();
  conn.close();
}


runMigration();
