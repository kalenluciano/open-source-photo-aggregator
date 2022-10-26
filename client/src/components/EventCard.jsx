import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from "../globals";

const EventCard = ({event, handleClick, photos, handleDeleteClick}) => {    
    const [createdAtString, setCreatedAtString] = useState('')
    const [startDateString, setStartDateString] = useState('')
    const [endDateString, setEndDateString] = useState('') 
    const [eventImage, setEventImage] = useState('')
    const [validLocation, setValidLocation] = useState(false)
    const [validEndDate, setValidEndDate] = useState(false)

    let navigate = useNavigate()

    const getEventImage = () => {
        photos.forEach((photo) => {
            if (photo.newsEventId._id === event._id) {
                setEventImage(photo.url)
                return
            }
        })
    }

    const getCreatedAtDateString = () => {
        const createdAtDate = new Date(event.createdAt)
        const createdAtDateString = createdAtDate.toDateString()
        setCreatedAtString(createdAtDateString)
    }

    const getStartDateString = () => {
        const startDate = new Date(event.startDate)
        const startDateString = startDate.toDateString()
        setStartDateString(startDateString)
    }

    const getEndDateString = () => {
        if (event.endDate === undefined || event.endDate === null) {
            return
        }
        const endDate = new Date(event.endDate)
        const endDateString = endDate.toDateString()
        setEndDateString(endDateString)
    }

    const checkValidLocation = () => {
        if (event.city || event.state || event.countries[0] || event.streetAddress || event.streetAddress2 || event.zip) {
            setValidLocation(true)
        }
    }

    const checkValidEndDate = () => {
        if (event.endDate === undefined || event.endDate === null) {
            return
        }
        setValidEndDate(true)
    }

    const handleEditClick = (eventId) => {
        navigate(`update/${eventId}`)
    }

    useEffect(() => {
        getEventImage()
        getCreatedAtDateString()
        getStartDateString()
        getEndDateString()
        checkValidLocation()
        checkValidEndDate()
    }, [])

    return (
        <div>
            {eventImage ? (<img src={eventImage} alt={event.newsEventName} onClick={() => handleClick(event._id)}></img>) : null}
            <h1 onClick={() => handleClick(event._id)}>{event.newsEventName}</h1>
            <p>Posted by {event.userId.username ? event.userId.username : 'Anonymous'} {createdAtString ? (`on ${createdAtString}`) : null}</p>
            <p>Started: {startDateString}</p> 
            {validEndDate && (<p>Ended: {endDateString}</p>)}
            {event.description && <p>{event.description}</p>}
            {validLocation && (
                    <div>
                        <p>Location: </p>
                        {event.streetAddress && <p>{event.streetAddress}</p>}
                        {event.streetAddress2 && <p>{event.streetAddress2}</p>}
                        {event.city && <p>{event.city}</p>}
                        {event.state && <p>{event.state}</p>}
                        {event.zip && <p>{event.zip}</p>}
                        {event.countries && event.countries.map((country, index) => <p key={index}>{country}</p>)}
                    </div>
                )}
            <button onClick={() => handleEditClick(event._id)}>Edit</button>
            <button onClick={() => handleDeleteClick(event._id)}>Delete</button>
        </div>
    )
}

export default EventCard