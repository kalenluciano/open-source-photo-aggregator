import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const PhotoCard = ({photo, handleDeleteClick}) => {
    const [validLocation, setValidLocation] = useState(false)
    const [photoDate, setPhotoDate] = useState('')
    
    let navigate = useNavigate()

    const checkValidLocation = () => {
        if (photo.city || photo.state || photo.country || photo.streetAddress || photo.streetAddress2 || photo.zip) {
            setValidLocation(true)
        }
    }

    const getDateString = () => {
        if (photo.dateTime === undefined || photo.dateTime === null) {
            return
        }
        const date = new Date(photo.dateTime)
        const dateString = date.toDateString()
        setPhotoDate(dateString)
    }

    const handleEditClick = (photoId) => {
        navigate(`/photos/update/${photoId}`)
    }

    useEffect(() => {
        checkValidLocation()
        getDateString()
    }, [])

    return (
        <div className="photo-container">
                <div key={photo._id}>
                    <img src={photo.url} alt={photo.description} />
                    <div className="photo-details">
                        <div className="photo-header">
                            {photo.photoTitle && <p>{photo.photoTitle}</p>}
                            <div className="photo-header-buttons"> 
                                <button onClick={() => handleEditClick(photo._id)}>Edit</button>
                                <button onClick={() => handleDeleteClick(photo._id)}>Delete</button>
                            </div>
                        </div>
                        {photo.dateTime && <p className="photo-date">{photoDate}</p>}
                        {/* <div>
                            {photo.userId.username ? (<p>Posted by {photo.userId.username}</p>) : (<p>Posted by Anonymous</p>)}
                        </div> */}
                        <div className="photo-description-details">
                            {photo.description && <p>{photo.description}</p>}
                        </div>
                        {validLocation && (
                            <div className="photo-location-details">
                                <div className="photo-street-address">
                                    {photo.streetAddress && <p>{photo.streetAddress}, </p>}
                                    {photo.streetAddress2 && <p>{photo.streetAddress2}</p>}
                                </div>
                                <div className="photo-location-city-state">
                                    {photo.city && <p>{photo.city}, </p>}
                                    {photo.state && <p>{photo.state} </p>}
                                    {photo.zip && <p>{photo.zip}</p>}
                                </div>
                                <div className="photo-location-country">
                                    {photo.country && <p>{photo.country}</p>}
                                </div>
                            </div>
                        )}
                        {/* <p>Upvotes: {photo.upvotes}</p>
                        <p>Downvotes: {photo.downvotes}</p> */}
                    </div>
            </div>
        </div>
    )
}

export default PhotoCard