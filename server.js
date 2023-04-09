const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const db = require("./database");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected");
  }
});

app.post("/register", (req, res) => {
  const { firstname, lastname } = req.body;
  try {
    db.query(
      "INSERT into students (firstname,lastname) VALUES(?,?)",
      [firstname, lastname],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.json("ok");
      }
    );
  } catch (error) {}
});
app.get("/students", (req, res) => {
  try {
    db.query("SELECT * from students", (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    });
  } catch (error) {}
});
app.listen(8080, () => {
  console.log("connected to 8080");
});
