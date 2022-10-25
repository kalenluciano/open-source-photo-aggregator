const db = require('../db');
const { User, Photo, NewsEvent } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
	Photo.collection.drop();

	const user1 = await User.find({ username: 'kalenluciano' });
	const user2 = await User.find({ username: 'darafshkaviyani' });

	const hurricaneIan = await NewsEvent.find({
		newsEventName: 'Hurricane Ian'
	});
	const mahsaAminiProtests = await NewsEvent.find({
		newsEventName: 'Mahsa Amini Protests'
	});

	const photos = [
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Hurricane_Ian_Aftermath_in_North_Port%2C_Florida_16.jpg/1600px-Hurricane_Ian_Aftermath_in_North_Port%2C_Florida_16.jpg?20220930025118',
			photoTitle: `Hurricane Ian Aftermath in North Port, Florida`,
			description: `Fooding and wind damage in the aftermath of Hurricane Ian. The children smiled and waved at everyone going by their driveway like they were trying to brighten people’s day in a dark time.`,
			dateTime: Date(2022, 9, 29),
			city: 'North Port',
			state: 'Florida',
			country: 'United States',
			upvotes: 0,
			downvotes: 0,
			userId: user1[0]._id,
			newsEventId: hurricaneIan[0]._id
		},
		{
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Amir_Kabir_University_uprising_September_2022_%283%29.jpg/1600px-Amir_Kabir_University_uprising_September_2022_%283%29.jpg?20220920073654',
			photoTitle: `Amir Kabir University uprising September 2022`,
			description: `Students of Amir Kabir university protest against Hijab and the Islamic Republic.`,
			dateTime: new Date(2022, 9, 20, 6, 37, 15),
			city: 'Tehran',
			state: 'Tehran Province',
			country: 'Iran',
			upvotes: 0,
			downvotes: 0,
			userId: user2[0]._id,
			newsEventId: mahsaAminiProtests[0]._id
		}
	];

	await Photo.insertMany(photos);
	console.log('Photos created!');
};

const run = async () => {
	await main();
	db.close();
};

run();
