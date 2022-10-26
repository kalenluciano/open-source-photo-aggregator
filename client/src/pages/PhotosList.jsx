import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Photo from '../components/Photo'

const PhotosList = ({photos}) => {
    const [eventPhotos, setEventPhotos] = useState([])

    let { id } = useParams()

    const getEventPhotos = () => {
        const eventPhotosList = photos.filter(photo => {
            return id === photo.newsEventId._id
        })
        console.log(eventPhotosList)
        setEventPhotos(eventPhotosList)
    }

    useEffect(() => {
        getEventPhotos()
    }, [])

    return (
        <div>
            <h1>Photos List</h1>
            {eventPhotos.map((eventPhoto) => (
                <Photo photo={eventPhoto} />
            ))}
        </div>
    )
}

export default PhotosList