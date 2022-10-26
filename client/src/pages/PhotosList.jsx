import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import PhotoCard from '../components/PhotoCard'
import axios from 'axios';
import { BASE_URL } from '../globals';

const PhotosList = () => {
    const [eventPhotos, setEventPhotos] = useState([])
    const [deletedPhoto, setDeletedPhoto] = useState(false)

    let { id } = useParams()

    const getEventPhotos = async () => {
        const response = await axios.get(`${BASE_URL}/photos`);
        const photos = response.data
        const eventPhotosList = photos.filter(photo => {
            return id === photo.newsEventId._id
        })
        setEventPhotos(eventPhotosList)
    }

    const handleDeleteClick = async (photoId) => {
        await axios.delete(`${BASE_URL}/photos/${photoId}/delete`)
        setDeletedPhoto(!deletedPhoto)
    }

    useEffect(() => {
        getEventPhotos()
    }, [deletedPhoto])

    return (
        <div>
            <h1>Photos List</h1>
            {eventPhotos.map((eventPhoto) => (
                <PhotoCard photo={eventPhoto} key={eventPhoto._id} handleDeleteClick={handleDeleteClick} />
            ))}
        </div>
    )
}

export default PhotosList