const { Client } = require("pg");
const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER, DB_URL } = process.env;

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "portfolio",
//   password: "12345678",
//   port: 5432,
// });

const client = new Sequelize(DB_URL, {
  define: {
    timestamps: false,
  },
});

module.exports = client;
