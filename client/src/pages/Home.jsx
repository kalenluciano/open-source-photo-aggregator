import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';

const Home = () => {

    const [photos, setPhotos] = useState([]);

	const getPhotos = async () => {
		const response = await axios.get(`${BASE_URL}/photos`);
		setPhotos(response.data);
	};

	useEffect(() => {
		getPhotos();
	}, []);

    return (
        <div>
            <h1>Open Source Photo Aggregator</h1>
            <h3>A collection of photos from the news events around the world.</h3>
            <NavLink to="/events" >Search News Events Database</NavLink>
            {photos.map(photo => (
                <div key={photo._id}>
                    <img src={photo.url} alt={photo.description} />
                </div>
            ))}
        </div>
    )
}

export default Home