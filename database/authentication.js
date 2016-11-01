
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var databaseUser = require('./user');

// Passport session setup.
// To support persistent login sessions, Passport needs to be able to
// serialize users into and deserialize users out of the session. Typically,
// this will be as simple as storing the user ID when serializing, and finding
// the user by ID when deserializing.
passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function (err, user) {
    if (err) { return done(err); }
		done(null, user);
	});
});

var User = databaseUser.getUser();

// Use the LocalStrategy within Passport.
// Strategies in passport require a `verify` function, which accept
// credentials (in this case, a username and password), and invoke a callback
// with a user object. In the real world, this would query a database;
// however, in this example we are using a baked-in set of users.
passport.use(new Strategy(
  function(username, password, done) {
	User.findOne({username: username}, function(err, user) {
		if (err) { return done(err); }
		if (!user) {
      return done(null, false, { message: 'Unknown user ' + username });
    }
		user.comparePassword(password, function(err, isMatch) {
			if (err) return done(err);
			if(isMatch) {
				return done(null, user);
			} else {
				return done(null, false, { message: 'Invalid password' });
			}
		});
	});
}));

exports.authenticateLocal = function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
      res.status(401).send({status: 401, error: 'Wrong credentials'});
			return;
		}
		req.login(user, function(err) {
			if (err) {
				return next(err);
			}
			// logged
      res.status(200).send({username: user.username});
		});
	})(req, res, next);
};

exports.ensureAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
  res.status(401).send({
		status: 401
	});
	return;
};

exports.registerUser = function (req, res, next) {
	req.params = req.body;
	databaseUser.add(req, res, next);
};
