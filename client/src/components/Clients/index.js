import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export function ClientProfile(props) {
    return (
        <div class="collection ">
        <a href="#!" class="collection-item active indigo darken-1">Gene Grogan</a>
        <a href="#!" class="collection-item indigo-text darken-1">Address</a>
        <a href="#!" class="collection-item indigo-text darken-1">Number</a>
        <a href="#!" class="collection-item indigo-text darken-1">Field</a>
      </div>
    )
}

export function ShiftChip(props) {
  var shift = {
      shiftID: "12345",
      timeStamp: "07/11/2019 13:30"
  }
  return (
        <Link to="shift">
       <div class="chip grey darken-2 white-text">
       <i class="tiny material-icons">assignment_ind</i>
         &nbsp;&nbsp;{shift.timeStamp}
           <i class="close material-icons">add_circle_outline</i>
      </div>
      </Link>
     
  )
}

export function ShiftStartButton(props) {
  return (
    <Link to="/tasks">
     <button className="btn waves-effect waves-light grey darken-2" type="submit" name="action">
          Start a shift with this client
          <i className="material-icons right">send</i>
       </button>
    </Link>
     
  )
}

export function AddClient(props) {
  return (
    <button className="btn waves-effect waves-light indigo-text white" type="submit" name="action"
      onClick="">Add new client
      <i className="material-icons left">add</i>
    </button>
  )
}

export function ClientChip(props) {
  var patient = {
      fullName: "Gene Grogan",
      userID: "12345"
  }
  return (
      <Link to="/client">
       <div class="chip indigo darken-1 white-text ">
           <i class="tiny material-icons">folder_shared</i> &nbsp;
         {patient.fullName}
           <i class="close material-icons">add_circle_outline</i>
      </div>
      </Link>
     
  )
}


export function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ text: "" });

  function handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    setQuery(newQuery);
  }

  function search() {
    const newQuery = Object.freeze({ text: query.text });
    if (onSearch) onSearch(newQuery);
  }

  return (
    <form >
      <input type="text" onChange={handleChange} placeholder="Enter full name of patient"/>
      <button className="btn waves-effect waves-light indigo-text white" onClick={search} type="button">
      <i class="material-icons left">&nbsp;&nbsp;</i> Search<i class="material-icons right">search</i>
      </button>
    </form>
  );
}
