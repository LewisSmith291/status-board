import React, { useState } from 'react';
import './App.css';
import TicketInfo from './TicketInfo';

function Board (props) {
  const [inProgress, setInProgress] = useState(
    props.inProgress.map((ticket) => 
      <Ticket 
        key = {ticket.id}
        id = {ticket.id}
        time = {ticket.time}
        name = {ticket.name}
        status = {ticket.status}
        info = {ticket.info}
      />
  ));

  const [completed, setCompleted] = useState(props.completed.map((ticket) => 
      <Ticket 
        key = {ticket.id}
        id = {ticket.id}
        time = {ticket.time}
        name = {ticket.name}
        status = {ticket.status}
        info = {ticket.info}
      />
  ));
  const [failed, setFailed] = useState(props.failed.map((ticket) => 
      <Ticket 
        key = {ticket.id}
        id = {ticket.id}
        time = {ticket.time}
        name = {ticket.name}
        status = {ticket.status}
        info = {ticket.info}
      />
  ));

  return (
    <div className="board">
      <div className="column in-progress">
        <TicketHeader type="In Progress"/>
        <ul>
          {inProgress}
        </ul>
      </div>

      <div className="column completed">
        <TicketHeader type="Completed"/>
        <ul>
          {completed}
        </ul>
      </div>

      <div className="column failed">
        <TicketHeader type="Failed"/>
        <ul>
          {failed}
        </ul>
      </div>
    </div>
  )
}

function Info(info){

  function toggle(){

  }


  return (
  <div>
    <p onClick={toggle()}>info</p>
    <div className='show-info'>{info.info}</div>
  </div>)
}

function Ticket(props){
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  function toggleShowInfo(){

  }



  return (
    <li className="ticket">
      <div>{props.time}</div>
      <div>{props.name}</div>
      <div>{props.status}</div>
      <Info info = {props.info} 
            isShowing = {isShowingInfo} 
      />
    </li>
  )
}

function toggleInfo(toggleFunction){
  toggleFunction();
}

function TicketHeader(props){
  return (
    <div className="header">
      {props.type}
    </div>
  )
}

export default Board
