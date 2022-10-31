import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdatePhotoForm = () => {
    const [events, setEvents] = useState([])
    const [photo, setPhoto] = useState({})
    const [initialPhotoState, setInitialPhotoState] = useState({
        url: '',
        photoTitle: '',
        description: '',
        dateTime: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        upvotes: 0,
        downvotes: 0,
        newsEventId: ''
    })
    const [formState, setFormState] = useState(initialPhotoState)

    const { id } = useParams()
    let navigate = useNavigate()

    const getPhoto = async () => {
        const response = await axios.get(`${BASE_URL}/photos/${id}`)
        setPhoto(response.data)
    }

    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/news-events`)
        setEvents(response.data)
    }

    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fieldsToUpdate = {}
        for (let field in formState) {
            if (formState[field]) {
                fieldsToUpdate[field] = formState[field] 
            }
        }
        const response = await axios.put(`${BASE_URL}/photos/${id}/update`, fieldsToUpdate)
        setFormState(initialPhotoState)
        navigate(`/photos/${response.data.newsEventId}`)
    }

    useEffect(() => {
        getPhoto()
        getEvents()
    }, [])


    return (
        <div>
            <h1>Update A Photo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="url">Photo Link: </label>
                <input id="url" type="text" onChange={handleChange} value={formState.url}></input>
                <label htmlFor="newsEventId">News Event: </label>
                <select id="newsEventId" onChange={handleChange} >
                    <option></option>
                    {events.map((event) => (
                        <option key={event._id} value={event._id} >{event.newsEventName}</option>
                    ))}
                </select>
                <label htmlFor="photoTitle">Photo Title: </label>
                <input id="photoTitle" type="text" onChange={handleChange} value={formState.photoTitle} />
                <label htmlFor="description">Photo Description: </label>
                <input id="description" type="text" onChange={handleChange} value={formState.description} />
                <label htmlFor="dateTime">Date of Photo: </label>
                <input id="dateTime" type="date" onChange={handleChange} value={formState.dateTime} />
                <label htmlFor="streetAddress">Street Address: </label>
                <input id="streetAddress" type="text" onChange={handleChange} value={formState.streetAddress} />
                <label htmlFor="streetAddress2">Street Address 2: </label>
                <input id="streetAddress2" type="text" onChange={handleChange} value={formState.streetAddress2} />
                <label htmlFor="city">City: </label>
                <input id="city" type="text" onChange={handleChange} value={formState.city} />
                <label htmlFor="state">State: </label>
                <input id="state" type="text" onChange={handleChange} value={formState.state} />
                <label htmlFor="zip">Zip Code: </label>
                <input id="zip" type="number" onChange={handleChange} value={formState.zip} />
                <label htmlFor="country">Country: </label>
                <input id="country" type="text" onChange={handleChange} value={formState.country} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePhotoForm