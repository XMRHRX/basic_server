import { createConnection, Connection } from 'typeorm'
import { runMigration } from '@/config';

async function runMigration(){
  const conn: Connection = await createConnection(config.default);
  await conn.runMigrations();
  conn.close();
}


runMigration();
