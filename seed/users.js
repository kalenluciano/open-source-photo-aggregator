const db = require('../db');
const { User } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const users = [
		{
			username: 'kalenluciano',
			emailAddress: 'kalen@email.com',
			firstName: 'Kalen',
			lastName: 'Luciano'
		},
		{
			username: 'chrisvazquez',
			emailAddress: 'chris@email.com',
			firstName: 'Chris',
			lastName: 'Vazquez'
		}
	];
	await User.insertMany(users);
	console.log('Created users!');
};

const run = async () => {
	await main();
	db.close();
};

run();
