import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import AddPhotoForm from './components/AddPhotoForm';
import AddEventForm from './components/AddEventForm';
import EventsList from './components/EventsList';
import Event from './components/Event';
import UpdateEventForm from './components/UpdateEventForm';
import PhotosList from './components/PhotosList';
import Photo from './components/Photo';
import UpdatePhotoForm from './components/UpdatePhotoForm';

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<EventsList />} />
				<Route path="/events/:id" element={<Event />} />
				<Route
					path="/events/update/:id"
					element={<UpdateEventForm />}
				/>
				<Route path="/photos" element={<PhotosList />} />
				<Route path="/photos/:id" element={<Photo />} />
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
