import { ConnectionOptions } from 'typeorm';
import { Init1615878322530 } from '@/migrations';
import { page } from '@/entry/page';

// for running migration
// import { page } from '../src/entry/page';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'ThinkPad',
  database: 'webpages',
  entities: [
    page,
  ],
  migrations: [Init1615878322530],
  migrationsRun: true,
  synchronize:  false,
  logging: 'all'
} as ConnectionOptions;
