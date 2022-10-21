const db = require('../db');
const { NewsEvent, User } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	const user1 = await User.find({ username: 'kalenluciano' });
	const user2 = await User.find({ username: 'darafshkaviyani' });

	const newsEvents = [
		{
			newsEventName: 'Hurricane Ian',
			description:
				'Hurricane Ian was a Category 4 hurricane that caused widespread damage across western Curba and the southeast United States, especially in Florida and South Carolina.',
			startDate: new Date(2022, 9, 23),
			endDate: new Date(2022, 10, 2),
			countries: ['United States', 'Cuba'],
			userId: user1._id
		},
		{
			newsEventName: 'Mahsa Amini Protests',
			description: `An ongoing series of protests against the Iranian government sparked by the death of 22-year-old Mahsa Amini, who had been arrested for wearing an 'improper' hijab.`,
			startDate: new Date(2022, 9, 16),
			countries: ['Iran'],
			userId: user2._id
		}
	];

	await NewsEvent.insertMany(newsEvents);
	console.log('Created events!');
};

const run = async () => {
	await main();
	db.close();
};

run();
