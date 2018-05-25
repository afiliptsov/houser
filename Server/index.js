require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const controller = require("./controller");

const port = process.env.PORT || 3001;

const app = express();
app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/houses", controller.getAll);
app.post("/api/addhouse", controller.create);
app.delete("/api/deletehouse/:id", controller.delete);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
