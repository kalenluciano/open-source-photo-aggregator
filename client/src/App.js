import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import AddPhotoForm from './components/AddPhotoForm';
import AddEventForm from './components/AddEventForm';
import EventsList from './pages/EventsList';
import EventCard from './components/EventCard';
import UpdateEventForm from './components/UpdateEventForm';
import PhotosList from './pages/PhotosList';
import PhotoCard from './components/PhotoCard';
import UpdatePhotoForm from './components/UpdatePhotoForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from './globals';

const App = () => {
	const [photos, setPhotos] = useState([]);

	const getPhotos = async () => {
		const response = await axios.get(`${BASE_URL}/photos`);
		setPhotos(response.data);
	};

	useEffect(() => {
		getPhotos();
	}, []);

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<EventsList />} />
				<Route path="/events/:id" element={<EventCard />} />
				<Route
					path="/events/update/:id"
					element={<UpdateEventForm />}
				/>
				<Route path="/photos/:id" element={<PhotosList />} />
				<Route path="/photos/:id" element={<PhotoCard />} />
				<Route
					path="/photos/update/:id"
					element={<UpdatePhotoForm />}
				/>
				<Route path="/add/photo" element={<AddPhotoForm />} />
				<Route path="/add/event" element={<AddEventForm />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
