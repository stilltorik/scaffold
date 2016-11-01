

var mongoose = require('mongoose')
  , bcrypt = require('bcrypt')
  , SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema ({
	username : { type : String, match: /^[a-zA-Z0-9-_]+$/},// required:true, unique:true },
	usernameLC : { type : String, match: /^[a-z0-9-_]+$/ },
	email: String,
	password: String,
	creationDate : { type : Date, default : Date.now }
})

exports.UserSchemaExt = UserSchema;

// Bcrypt middleware
UserSchema.pre('save', function(next) {
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) return next(err);

		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);
			user.password = hash;
			next();
		});
	});
});

// Password verification
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return cb(err);
		cb(null, isMatch);
	});
};

var User = mongoose.model('Users', UserSchema);

exports.getUser = function () {
	return User;
}
exports.showAll = function (req, res) {
	User.find({}, function (err, docs){
		res.json({users: docs});
	});
}

// add, update, delete, access
exports.access = function (req, res) {
	// TODO to be cleaned
	req.params.usernameLC = req.body.username.toLowerCase();
	User.findOne({usernameLC: req.params.usernameLC}, function (err, user){
		if (err) {
			res.status(400).json(err);
		} else if (!user) {
			res.status(403).json({status: 403, message: 'User does not exist'});
		} else {
			var userCopy = JSON.parse(JSON.stringify(user));
			delete userCopy.password;
			userCopy.status = 200;
			res.json(userCopy);
		}
	});
}

exports.add = function (req, res) {
	// TODO substring not working when in post. Need to cleanily fixed.
	// req.params.username = req.params.username.substring(1);
  var body = req.body;
	User.findOne({usernameLC: body.username.toLowerCase()}, function (err, users){
		if (err) {
			res.json(err);
		} else {
			if (users) {
				res.status(403).json ({
          status: 403,
					message: "User already exists"
				});
			} else {
				new User ({
					username: body.username,
					usernameLC: body.username.toLowerCase(),
					email: body.email,
					password: body.password,
					creationDate: new Date()
				}).save(function (err, user){
					if (err) {
						res.status(400).json(err);
					} else {
						res.json({
							username: body.username,
							status: 200
						});
					}
				});
			}
		}
	});
}

exports.remove = function (req, res) {
	req.params.username = req.params.username.substring(1);
	User.remove({username: req.params.username}, function (err, nbRemoved) {
		if (err) {
			res.json(err);
		} else if (nbRemoved === 0){
			//TODO remove send
			res.json({message: 'Nothing removed'});
		} else {
			//TODO remove send
			res.json({message: req.params.username + ' successfully deleted'});
		}
	})
}
