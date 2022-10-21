const { Schema } = require('mongoose');

const NewsEvent = new Schema(
	{
		newsEventName: { type: String, required: true },
		description: String,
		date: { type: Date, required: true },
		streetAddress: String,
		city: String,
		state: String,
		zip: Number,
		userId: { type: Schema.Types.ObjectId, ref: 'User' },
		photoIds: [{ type: Schema.Types.ObjectId, ref: 'Photo' }]
	},
	{ timestamps: true }
);

module.exports = NewsEvent;
