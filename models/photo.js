const { Schema } = require('mongoose');

const Photo = new Schema(
	{
		url: { type: String, required: true },
		photoTitle: { type: String, required: true },
		description: String,
		time: { type: Date, required: true },
		streetAddress: { type: String, required: true },
		streetAddress2: String,
		city: { type: String, required: true },
		state: { type: String, required: true },
		zip: { type: Number, required: true },
		upvotes: Number,
		downvotes: Number,
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		newsEventId: { type: Schema.Types.ObjectId, ref: 'NewsEvent' }
	},
	{ timestamps: true }
);

module.exports = Photo;
