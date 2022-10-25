const db = require('../db');
const { User } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	User.collection.drop();

	const users = [
		{
			username: 'kalenluciano',
			emailAddress: 'kalen@email.com',
			firstName: 'Kalen',
			lastName: 'Luciano'
		},
		{
			username: 'darafshkaviyani',
			emailAddress: 'Darafsh_Wiki@Hotmail.com',
			firstName: 'Darafsh',
			lastName: 'Kaviyani'
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
