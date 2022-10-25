import {NavLink} from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <NavLink to="/events" >Click to Events List</NavLink>
        </div>
    )
}

export default Home