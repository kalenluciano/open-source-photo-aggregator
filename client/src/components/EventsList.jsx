import axios from 'axios'
import {useState, useEffect} from 'react'
import {BASE_URL} from '../globals'
import Event from './Event'

const EventsList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/news-events`)
        console.log(response.data)
        setEvents(response.data)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h1>Events List</h1>
                {events.map((event) => (
                    <Event event={event} />
                ))}
        </div>
    )
}

export default EventsList