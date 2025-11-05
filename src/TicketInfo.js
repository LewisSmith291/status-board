import React from 'react'
import  { useState } from 'react'

function TicketInfo(time, name, status, children){
  const [timeCreated, setTimeCreated] = useState({time});
  const [ticketName, setTicketName] = useState({name});
  const [ticketStatus, setTicketStatus] = useState({status});


  return (
    <div className="ticket">

      {/*
      <div className="name">{ticketName}</div>
      <div className="time">{timeCreated}</div>
      <div className="status">{ticketStatus}</div> 
      */}
    </div>
  )
}

export default TicketInfo
