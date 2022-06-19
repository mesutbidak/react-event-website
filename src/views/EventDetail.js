import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export const EventDetail = () => {
    const { id } = useParams()
    const [event, setEvent] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/events/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setEvent(data);
            })

    }, [])
    return (
        <div>EventDetail - {id} - {event&& event.title}</div>
    )
}

export default EventDetail;
