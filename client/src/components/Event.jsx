import { useEffect, useState } from "react"

const Event = ({event, handleClick}) => {    
    const [createdAtString, setCreatedAtString] = useState('')
    const [startDateString, setStartDateString] = useState('')
    const [endDateString, setEndDateString] = useState('') 

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

    useEffect(() => {
        getCreatedAtDateString()
        getStartDateString()
        getEndDateString()
    })

    return (
        <div onClick={() => handleClick(event._id)}>
            <img src="" alt={event.newsEventName}></img>
            <h1>{event.newsEventName}</h1>
            <p>Posted by {event.userId.username ? event.userId.username : 'Anonymous'} {createdAtString ? (`on ${createdAtString}`) : null}</p>
            <p>Started: {startDateString}</p> 
            {endDateString ? (<p>Ended: {endDateString}</p>) : null}
            <p>{event?.description}</p>
            <div>{event.countries.map((country, index) => <p key={index}>{country}</p>)}</div>
        </div>
    )
}

export default Event