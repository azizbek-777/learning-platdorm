import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

export const DbConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'learnapp_mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'learn_app',
  synchronize: false, // Always set to false in production
  logging: false, // Enable logging for debugging
  entities: ['./src/database/entities/*.ts'],
  migrationsRun: true,
  migrations: ['./src/database/migrations/*.ts'],
};

const AppDataSource = new DataSource(DbConfig);
AppDataSource.initialize()
  .then(() => {
    console.log('🟢 Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('🟥 Error during Data Source initialization', err);
  });

export default AppDataSource;
