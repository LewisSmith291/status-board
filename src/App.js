import './App.css';
import Board from './Board.js'
import { useState } from 'react';

function App() {

  const [tickets, setTickets] = useState([
    {id:1, time:"1:30", name:"do this", status:"in-progress"},
    {id:2, time:"2:30", name:"do that", status:"completed"},
    {id:3, time:"3:30", name:"do something", status:"completed"},
    {id:4, time:"4:30", name:"do something please", status:"completed"},
    {id:5, time:"5:30", name:"do something else", status:"failed"}
  ]);

  return (
    <div className="App">
      <Board 
        inProgress = {tickets.filter((ticket) => ticket.status === "in-progress")}
        completed = {tickets.filter((ticket) => ticket.status === "completed")}
        failed = {tickets.filter((ticket) => ticket.status === "failed")}
      />
    </div>
  );
}

export default App;
