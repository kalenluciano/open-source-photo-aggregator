const Photo = ({photo}) => {
    
    const checkValidLocation = () => {
        if (photo.city || photo.state || photo.country || photo.streetAddress || photo.streetAddress2 || photo.zip) {
            return true
        }
    }

    return (
        <div>
            <h1>Photo</h1>

            {/* <div key={eventPhoto._id}>
                    <img src={eventPhoto.url} alt={eventPhoto.description} />
                    {eventPhoto.userId.username && (<p>Posted by {eventPhoto.userId.username}</p>)}
                    { && <p>Location: </p>}
                </div> */}
        </div>
    )
}

export default Photo