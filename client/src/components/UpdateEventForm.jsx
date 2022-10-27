import { useState, useEffect } from "react"
import { BASE_URL } from "../globals"
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateEventForm = () => {
    const [event, setEvent] = useState({})
    const [initialFormState, setInitialFormState] = useState({
            newsEventName: '',
            description: '',
            startDate: '',
            endDate: '',
            streetAddress: '',
            streetAddress2: '',
            city: '',
            state: '',
            zip: '',
            countries: ''
    })
    const [formState, setFormState] = useState(initialFormState)

    const { id } = useParams()
    let navigate = useNavigate()

    const getEvent = async () => {
        const response = await axios.get(`${BASE_URL}/news-events/${id}`)
        await setEvent(response.data)
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
        await axios.put(`${BASE_URL}/news-events/${id}/update`, fieldsToUpdate)
        setFormState(initialFormState)
        navigate(`/events`)
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        <div>
            <h1>Update Event Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newsEventName">News Event Name: </label>
                <input id="newsEventName" type="text" onChange={handleChange} value={formState.newsEventName} />
                <label htmlFor="description">Event Description: </label>
                <input id="description" type="text" onChange={handleChange} value={formState.description} />
                <label htmlFor="startDate">Event Start Date: </label>
                <input id="startDate" type="date" onChange={handleChange} value={formState.startDate} />
                <label htmlFor="endDate">Event End Date: </label>
                <input id="endDate" type="date" onChange={handleChange} value={formState.endDate} />
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
                <label htmlFor="countries">Countries: </label>
                <input id="countries" type="text" onChange={handleChange} value={formState.countries} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateEventForm