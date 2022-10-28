import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <div className='nav-bar'>
            <NavLink to="/" className='home-nav-button' >Home</NavLink>
            <div className='all-other-nav-buttons'>
                <NavLink to="/events" className='events-nav-button' >Events</NavLink>
                {/* <NavLink to="/photos" >Photos</NavLink> */}
                <NavLink to="/add/event" className='add-event-nav-button' >Add Event</NavLink>
                <NavLink to="/add/photo" className='add-photo-nav-button' >Add Photo</NavLink>
            </div>
        </div>
    )
}

export default Nav