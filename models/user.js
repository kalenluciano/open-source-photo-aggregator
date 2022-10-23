const { Schema } = require('mongoose');

const User = new Schema(
	{
		username: { type: String, required: true, unique: true },
		emailAddress: {
			type: String,
			required: true,
			lowercase: true,
			unique: true
		},
		firstName: String,
		lastName: String
	},
	{ timestamps: true }
);

module.exports = User;
