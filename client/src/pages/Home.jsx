import {NavLink} from 'react-router-dom'

const Home = ({photos}) => {

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