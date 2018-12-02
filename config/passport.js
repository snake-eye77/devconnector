const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

opts.secretOrkey = keys.secretOrkey;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {}));
};
