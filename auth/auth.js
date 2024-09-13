
const passport = require('passport')
var JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/userRegistration');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret-key' 
};

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
      const user = await UserModel.findById(jwtPayload.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);
