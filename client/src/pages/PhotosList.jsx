import {useParams} from 'react-router-dom'

const PhotosList = () => {
    
    let {id} = useParams

    return (
        <div>
            <h1>Photos List</h1>
        </div>
    )
}

export default PhotosList