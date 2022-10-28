import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

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

    const recheckEventImages = () => {
        getEventImage()
    }

    useEffect(() => {
        getEventImage()
        getCreatedAtDateString()
        getStartDateString()
        getEndDateString()
        checkValidLocation()
        checkValidEndDate()
        recheckEventImages()
    }, [])

    return (
        <div className="event-container" >
            {eventImage ? (<img src={eventImage} alt={event.newsEventName} onClick={() => handleClick(event._id)} ></img>) : <img src="https://iaia.edu/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" alt="Image placeholder" />}
            <div className="event-details">
                <div className="event-header">
                    <h3 onClick={() => handleClick(event._id)}>{event.newsEventName}</h3>
                    <div className="event-header-buttons">
                        <button onClick={() => handleEditClick(event._id)}>Edit</button>
                        <button onClick={() => handleDeleteClick(event._id)}>Delete</button>
                    </div>
                </div>
                {/* <p>Posted by {event.userId.username ? event.userId.username : 'Anonymous'} {createdAtString ? (`on ${createdAtString}`) : null}</p> */}
                {validEndDate ? (<p className="event-dates" >{startDateString} - {endDateString}</p>) : <p className="event-dates">Started: {startDateString}</p>}
                <div className="event-description-details">
                    {event.description && <p>{event.description}</p>}
                </div>
                {validLocation && (
                        <div className="event-location-details">
                            {/* <div className="event-location-street">
                                {event.streetAddress && <p>{event.streetAddress}, </p>}
                                {event.streetAddress2 && <p>{event.streetAddress2}</p>}
                            </div> */}
                            <div className="event-location-city-state">
                                {event.city && <p>{event.city}, </p>}
                                {event.state && <p>{event.state} </p>}
                                {event.zip && <p>{event.zip}</p>}
                            </div>
                            <div className="event-location-country">
                                {event.countries && event.countries.map((country, index, arr) => (
                                    arr.length - 1 === index ? <p key={index}>{country}</p> : <p key={index}>{country}, </p>
                                ))}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default EventCard