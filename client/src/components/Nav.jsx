import { NavLink } from 'react-router-dom';
import Home from './Home'
import EventsList from './EventsList'
import PhotosList from './PhotosList'
import AddPhotoForm from './AddPhotoForm';
import AddEventForm from './AddEventForm';

const Nav = () => {

    return (
        <div>
            <h1>Nav</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events" >Events</NavLink>
            <NavLink to="/photos" >Photos</NavLink>
            <NavLink to="/add/event" >Add Event</NavLink>
            <NavLink to="/add/photo" >Add Photo</NavLink>
        </div>
    )
}

export default Nav