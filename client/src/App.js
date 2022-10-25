import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
