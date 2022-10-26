const { Schema } = require('mongoose');

const NewsEvent = new Schema(
	{
		newsEventName: { type: String, required: true },
		description: String,
		startDate: { type: Date, required: true },
		endDate: Date,
		streetAddress: String,
		streetAddress2: String,
		city: String,
		state: String,
		zip: Number,
		countries: [{ type: String }],
		userId: { type: Schema.Types.ObjectId, ref: 'User' }
	},
	{ timestamps: true }
);

module.exports = NewsEvent;
