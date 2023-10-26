import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

const db = new Sequelize('students_db', dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql'
});

export default db;