const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false, //for reading from database
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },
    },
    timezone: '+07:00',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
);

module.exports = sequelize
