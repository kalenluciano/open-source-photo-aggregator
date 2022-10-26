import axios from 'axios'
import {useState, useEffect} from 'react'
import {BASE_URL} from '../globals'
import EventCard from '../components/EventCard'
import { useNavigate } from 'react-router-dom'

const EventsList = () => {
    const [photos, setPhotos] = useState([]);
    const [events, setEvents] = useState([])

    let navigate = useNavigate()

    const getPhotos = async () => {
        const response = await axios.get(`${BASE_URL}/photos`);
        await setPhotos(response.data);
    };

    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/news-events`)
        setEvents(response.data)
    }

    const handleClick = (eventId) => {
        navigate(`/photos/${eventId}`)
    }

    useEffect(() => {
        getPhotos()
        getEvents()
    }, [])

    return (
        <div>
            <h1>Events List</h1>
                {events.map((event) => (
                    <EventCard event={event} key={event._id} handleClick={handleClick} photos={photos} />
                ))}
        </div>
    )
}

export default EventsList