import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from "../globals"
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
        <div>
            <h1>Photo</h1>
            <div key={photo._id}>
                <img src={photo.url} alt={photo.description} />
                {photo.photoTitle && <p>{photo.photoTitle}</p>}
                {photo.description && <p>{photo.description}</p>}
                {photo.userId.username && (<p>Posted by {photo.userId.username}</p>)}
                <p>Upvotes: {photo.upvotes}</p>
                <p>Downvotes: {photo.downvotes}</p>
                {photo.dateTime && <p>{photoDate}</p>}
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
                <button onClick={() => handleEditClick(photo._id)}>Edit</button>
                <button onClick={() => handleDeleteClick(photo._id)}>Delete</button>
            </div>
        </div>
    )
}

export default PhotoCard