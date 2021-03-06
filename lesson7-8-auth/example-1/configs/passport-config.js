const passport = require("passport");
const passportJWT = require("passport-jwt");
require("dotenv").config();

const { users: service } = require("../services");

const { ExtractJWT, Strategy } = passportJWT;

const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(
  new Strategy(setting, async (payload, done) => {
    try {
      const user = await service.findById(payload.id);
      // const invalidToken = redis.blacklist.get(user.token);
      // if(!user || invalidToken) {throw new Error("Invalid authorize")}
      if (!user) {
        throw new Error("User not found");
      }
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);
