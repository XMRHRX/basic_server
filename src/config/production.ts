import { ConnectionOptions } from 'typeorm';
import { Init1615878322530 } from '@/migrations';
import { page } from '@/entry/page';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'ThinkPad',
  database: 'webpages',
  dropSchema: false,
  entities: [
    page,
  ],
  migrations: [Init1615878322530],
  migrationsRun: false,
  synchronize:  false,
  extra: {
	  charset: 'utf8_unicode_ci',
  },
  logging: 'all'
} as ConnectionOptions;
