const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
//DB config
const db = require("./config/keys").mongoURI;

//body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongo DB connect
mongoose
  .connect(db)
  .then(() => console.log("we sre connect with mongo db"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//use fo routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on ${port}`));
