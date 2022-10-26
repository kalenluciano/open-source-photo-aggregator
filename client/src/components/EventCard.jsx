import { useEffect, useState } from "react";

const EventCard = ({event, handleClick, photos}) => {    
    const [createdAtString, setCreatedAtString] = useState('')
    const [startDateString, setStartDateString] = useState('')
    const [endDateString, setEndDateString] = useState('') 
    const [eventImage, setEventImage] = useState('')
    const [validLocation, setValidLocation] = useState(false)

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
        if (event.endDate === undefined) {
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

    useEffect(() => {
        getEventImage()
        getCreatedAtDateString()
        getStartDateString()
        getEndDateString()
        checkValidLocation()
    }, [])

    return (
        <div onClick={() => handleClick(event._id)}>
            {eventImage ? (<img src={eventImage} alt={event.newsEventName}></img>) : null}
            <h1>{event.newsEventName}</h1>
            <p>Posted by {event.userId.username ? event.userId.username : 'Anonymous'} {createdAtString ? (`on ${createdAtString}`) : null}</p>
            <p>Started: {startDateString}</p> 
            {endDateString ? (<p>Ended: {endDateString}</p>) : null}
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
        </div>
    )
}

export default EventCard