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
            <h1>Home</h1>
            <NavLink to="/events" >Click to Events List</NavLink>
            {photos.map(photo => (
                <div key={photo._id}>
                    <img src={photo.url} alt={photo.description} />
                </div>
            ))}
        </div>
    )
}

export default Home