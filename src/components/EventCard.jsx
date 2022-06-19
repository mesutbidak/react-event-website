import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EventCard = (props) => {
  const event = props.event;
  const navigate = useNavigate();
  
  return (
    <div className='event-card'>
      <div className='thumbnail-container'>
        <img src={event && event.imageUrl[1]} className="thumbnail" />
      </div>
      <div className='event-card-description'>
        <label>EventCard - {event && event.title} + {event && event.id}</label><br/>
        <label>asd</label><br/>
        <label>asd</label><br/>
        <label>asd</label>


      </div>
      <div className='event-card-button' onClick={()=>{
          navigate(`/eventdetail/${event.id}`);
        }}>DETAY
      </div>
    </div>
  )
}

export default EventCard