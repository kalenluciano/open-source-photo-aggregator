const BASE_URL =
	url.hostname === 'localhost'
		? 'http://localhost:3001'
		: 'https://open-source-photo-aggregator.herokuapp.com';

export default BASE_URL;
