import React, { useState } from 'react';
import './App.css';
import TicketInfo from './TicketInfo';

function  Board () {
  const [tickets, setTickets] = useState(
    [
      <TicketInfo time = "4:30"
        name = "Do this thing"
        status = "In Progress" />
    ]
  );

  const [inProgress, setInProgress] = useState(
    tickets.map((ticket) => {
      
    })
  );

  console.log(tickets[0]);


  return (
    <div className="board">
      <TicketHeader type="in-progress">
        {inProgress}
      </TicketHeader>
      <TicketHeader type="completed">
        <TicketInfo
          time = "4:30"
          name = "Do this thing"
          status = "In Progress"
        />
      </TicketHeader>
      <TicketHeader type="failed">
        <TicketInfo
          time = "4:30"
          name = "Do this thing"
          status = "In Progress"
        />
      </TicketHeader>
    </div>
  )
}

function TicketHeader({type, children}){
  return (
    <div className={"header " + type}>
      {children}
    </div>
  )
}


export default Board
