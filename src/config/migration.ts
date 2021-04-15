import { ConnectionOptions } from 'typeorm';
import * as productConfig from './production';

export default {
  ...productConfig.default,
  migrationsRun: true,
  dropSchema: true,
  synchronize: true,
  logging: 'all'
} as ConnectionOptions;

