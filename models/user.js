const { Schema } = require('mongoose');

const User = new Schema(
	{
		username: { type: String, required: true },
		emailAddress: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		photoIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Photo'
			}
		],
		newsEventIds: [
			{
				type: Schema.Types.ObjectId,
				ref: 'newsEvent'
			}
		]
	},
	{ timestamps: true }
);

module.exports = User;
