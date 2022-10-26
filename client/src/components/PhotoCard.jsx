import { useState, useEffect } from "react"

const PhotoCard = ({photo}) => {
    const [validLocation, setValidLocation] = useState(false)
    const [photoDate, setPhotoDate] = useState('')
    
    const checkValidLocation = () => {
        if (photo.city || photo.state || photo.country || photo.streetAddress || photo.streetAddress2 || photo.zip) {
            setValidLocation(true)
        }
    }

    const getDateString = () => {
        if (photo.dateTime === undefined) {
            return
        }
        const date = new Date(photo.dateTime)
        const dateString = date.toDateString()
        setPhotoDate(dateString)
    }

    useEffect(() => {
        checkValidLocation()
        getDateString()
    }, [])

    return (
        <div>
            <h1>Photo</h1>
            <div key={photo._id}>
                <img src={photo.url} alt={photo.description} />
                {photo.photoTitle && <p>{photo.photoTitle}</p>}
                {photo.description && <p>{photo.description}</p>}
                {photo.userId.username && (<p>Posted by {photo.userId.username}</p>)}
                <p>Upvotes: {photo.upvotes}</p>
                <p>Downvotes: {photo.downvotes}</p>
                {photo.description && <p>{photoDate}</p>}
                {validLocation && (
                    <div>
                        <p>Location: </p>
                        {photo.streetAddress && <p>{photo.streetAddress}</p>}
                        {photo.streetAddress2 && <p>{photo.streetAddress2}</p>}
                        {photo.city && <p>{photo.city}</p>}
                        {photo.state && <p>{photo.state}</p>}
                        {photo.zip && <p>{photo.zip}</p>}
                        {photo.country && <p>{photo.country}</p>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PhotoCard