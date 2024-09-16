const { Client } = require("pg");

const client = new Client({
  user: "azril",
  host: "dpg-crjvphdds78s73efk8i0-a",
  database: "portfoliodb_fqoa",
  password: "GX8FRhsZbraGgumRibNkGwHMySS3fnbs",
  port: 5432,
});

module.exports = client;
