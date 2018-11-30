const express = require("express");
const mongoose = require("mongoose");
const app = express();

//DB config
const db = require("./config/keys").mongoURL;
//mongo DB connect
mongoose
  .connect(db)
  .then(() => console.log("we sre connect with mongo db"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("hello"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));
