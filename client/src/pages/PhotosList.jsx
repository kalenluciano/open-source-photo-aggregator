import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoCard from '../components/PhotoCard'
import axios from 'axios';
import { BASE_URL } from '../globals';

const PhotosList = () => {
    const [event, setEvent] = useState('')
    const [eventPhotos, setEventPhotos] = useState([])
    const [deletedPhoto, toggleDeletedPhoto] = useState(false)

    let { id } = useParams()

    const getEventPhotos = async () => {
        const response = await axios.get(`${BASE_URL}/photos`);
        const photos = response.data
        const eventPhotosList = photos.filter(photo => {
            return id === photo.newsEventId._id
        })
        setEventPhotos(eventPhotosList)
    }

    const getEvent = async () => {
        const response = await axios.get(`${BASE_URL}/news-events/${id}`)
        const eventName = response.data.newsEventName
        setEvent(eventName)
    }

    const handleDeleteClick = async (photoId) => {
        await axios.delete(`${BASE_URL}/photos/${photoId}/delete`)
        toggleDeletedPhoto(!deletedPhoto)
    }

    useEffect(() => {
        getEventPhotos()
        getEvent()
    }, [deletedPhoto])

    return (
        <div>
            {event ? <h1>Photos From {event}</h1> : null}
            <div className="photos-grid">
                {eventPhotos.map((eventPhoto) => (
                    <PhotoCard photo={eventPhoto} key={eventPhoto._id} handleDeleteClick={handleDeleteClick} />
                ))}
            </div>
        </div>
    )
}

export default PhotosList