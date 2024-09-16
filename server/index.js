const express = require("express");
const { Client } = require("pg");
const path = require("path");
const bodyParser = require("body-parser");
//const cors = require("cors"); // Import CORS
const client = require("./db/database");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/form", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM form");
  } catch (error) {
    console.error(err);
    res.status(500).send("Error retieving data from database");
  }
});

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;
  const date = new Date();

  try {
    await client.query("INSERT INTO form (name,email,message, date) VALUES ($1,$2,$3,$4)", [name, email, message, date]);
    res.status(200).send("Data saved");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting data");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
