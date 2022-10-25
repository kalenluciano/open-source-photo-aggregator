import axios from 'axios'
import {useState, useEffect} from 'react'

const EventsList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await axios.get('http://localhost:3001/news-events')
        console.log(response)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div>
            <h1>Events List</h1>
        </div>
    )
}

export default EventsList