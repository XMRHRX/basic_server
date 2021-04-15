import { ConnectionOptions } from 'typeorm';
import { Init1615878322530 } from '@/migrations';
import { Page } from '@/entry';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'ThinkPad',
  database: 'webpages',
  dropSchema: false,
  entities: [
    Page,
  ],
  migrations: [ Init1615878322530 ],
  migrationsRun: false,
  synchronize:  false,
  extra: {
	  charset: 'utf8_unicode_ci',
  },
  logging: 'all'
} as ConnectionOptions;
