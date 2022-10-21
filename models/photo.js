const { Schema } = require('mongoose');

const Photo = new Schema(
	{
		url: { type: String, required: true },
		photoTitle: String,
		description: String,
		dateTime: Date,
		streetAddress: String,
		streetAddress2: String,
		city: String,
		state: String,
		zip: Number,
		country: String,
		upvotes: Number,
		downvotes: Number,
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		newsEventId: { type: Schema.Types.ObjectId, ref: 'NewsEvent' }
	},
	{ timestamps: true }
);

module.exports = Photo;
