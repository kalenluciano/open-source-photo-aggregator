const Event = ({event}) => {

    return (
        <div>
            <h1>{event.newsEventName}</h1>
            <p>Posted by {event.userId.username ? event.userId.username : 'Anonymous'} on {event.createdAt}</p>
            <p>{event?.startDate}</p> 
            <p>{event.endDate}</p>
            <p>{event?.description}</p>
            <div>{event.countries.map((country) => <p>{country}</p>)}</div>
        </div>
    )
}

export default Event