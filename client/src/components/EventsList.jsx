import axios from 'axios'
import {useState, useEffect} from 'react'
import {BASE_URL} from '../globals'
import EventCard from './EventCard'
import { useNavigate } from 'react-router-dom'

const EventsList = () => {
    const [events, setEvents] = useState([])
    const [photos, setPhotos] = useState([])

    let navigate = useNavigate()

    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/news-events`)
        setEvents(response.data)
    }

    const handleClick = (eventId) => {
        navigate(`/photos/${eventId}`)
    }

    const getPhotos = async () => {
        const response = await axios.get(`${BASE_URL}/photos`);
        console.log(response.data)
        setPhotos(response.data)
    }

    useEffect(() => {
        getEvents()
        getPhotos()
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