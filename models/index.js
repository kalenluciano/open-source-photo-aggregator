const mongoose = require('mongoose');
const UserSchema = require('./user');
const PhotoSchema = require('./photo');
const NewsEventSchema = require('./newsEvent');

const User = mongoose.model('User', UserSchema);
const Photo = mongoose.model('Photo', PhotoSchema);
const NewsEvent = mongoose.model('NewsEvent', NewsEventSchema);

module.exports = {
	User,
	Photo,
	NewsEvent
};
