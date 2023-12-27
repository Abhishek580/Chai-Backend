const configs = {};
import path from "path";
dotenv.config({ path: path.resolve(".", "./.env") });
// dotenv.config({ path: path.resolve('./.env') })
const ENV = process.env;
import dotenv from "dotenv";
configs.mongoDb_url = ENV.MONGO_DB_URL;


export default configs;



























/*
knex file content

const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve('..', 'cetchIP-api.env') })
const ENV = process.env

// Database config settings
module.exports = {
  development: {
    client: ENV.cetchIP_DB_CLIENT,
    connection: {
      server: ENV.cetchIP_DB_SERVER,
      user: ENV.cetchIP_DB_USER,
      password: ENV.cetchIP_DB_PASSWORD,
      database: ENV.cetchIP_DATABASE,
      options: {
        encrypt: true
      }
    },
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: ENV.cetchIP_DB_CLIENT,
    connection: {
      server: ENV.cetchIP_DB_SERVER,
      user: ENV.cetchIP_DB_USER,
      password: ENV.cetchIP_DB_PASSWORD,
      database: ENV.cetchIP_DATABASE,
      options: {
        encrypt: true
      }
    },
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: ENV.cetchIP_DB_CLIENT,
    connection: {
      server: ENV.cetchIP_DB_SERVER,
      user: ENV.cetchIP_DB_USER,
      password: ENV.cetchIP_DB_PASSWORD,
      database: ENV.cetchIP_DATABASE,
      options: {
        encrypt: true
      }
    },
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

*/
