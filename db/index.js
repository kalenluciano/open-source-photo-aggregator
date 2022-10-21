const mongoose = require('mongoose');
require('dotenv').config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Successfully connected to MongoDB');
	})
	.catch((e) => {
		console.log('Connection error', e.message);
	});

mongoose.set('debug', true); // Delete this line before deployment

const db = mongoose.connection;

module.exports = db;
