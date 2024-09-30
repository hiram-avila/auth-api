// config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Cambia esto a 'postgres' si usas PostgreSQL
    dialectOptions: {
        // Opciones adicionales para mejorar la compatibilidad, si es necesario
        // Puedes ajustar esto según la configuración de tu RDS
        socketPath: '/var/run/mysqld/mysqld.sock',
    },
});

export default sequelize;
