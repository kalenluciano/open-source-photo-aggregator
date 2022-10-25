import axios from 'axios'
import {useState, useEffect} from 'react'
import {BASE_URL} from '../globals'
import Event from './Event'
import { useNavigate } from 'react-router-dom'

const EventsList = () => {
    const [events, setEvents] = useState([])

    let navigate = useNavigate()

    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/news-events`)
        console.log(response.data)
        setEvents(response.data)
    }

    const handleClick = (eventId) => {
        navigate(`/photos/${eventId}`)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h1>Events List</h1>
                {events.map((event) => (
                    <Event event={event} key={event._id} handleClick={handleClick} />
                ))}
        </div>
    )
}

export default EventsList