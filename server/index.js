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

client.connect();

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
  const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short" };
  const formattedDate = date.toLocaleString("id-ID", options);

  try {
    await client.query("INSERT INTO form (name,email,message, date) VALUES ($1,$2,$3,$4)", [name, email, message, formattedDate]);
    res.status(200).send("Data saved");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting data");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
