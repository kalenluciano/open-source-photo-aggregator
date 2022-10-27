import { useState } from "react"
import { BASE_URL } from "../globals"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddEventForm = () => {

    const [initialState, setInitialState] = useState(
        {
            newsEventName: '',
            description: '',
            startDate: '',
            endDate: '',
            streetAddress: '',
            streetAddress2: '',
            city: '',
            state: '',
            zip: '',
            countries: '',
            userId: '6352f8ada097dc2431c0828a',
        }
    )
    const [formState, setFormState] = useState(initialState)

    let navigate = useNavigate()

    const handleChange = e => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BASE_URL}/news-events/add`, formState)
        setFormState(initialState)
        navigate(`/events`)
    }

    return (
        <div>
            <h1>Add An Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newsEventName">News Event Name: </label>
                <input id="newsEventName" type="text" onChange={handleChange} value={formState.newsEventName} required />
                <label htmlFor="description">Event Description: </label>
                <input id="description" type="text" onChange={handleChange} value={formState.description} />
                <label htmlFor="startDate">Event Start Date: </label>
                <input id="startDate" type="date" onChange={handleChange} value={formState.startDate} required />
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

export default AddEventForm