import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export function ClientProfile(props) {
    return (
        <div class="collection">
        <a href="#!" class="collection-item active">Gene Grogan</a>
        <a href="#!" class="collection-item ">Address</a>
        <a href="#!" class="collection-item">Number</a>
        <a href="#!" class="collection-item">Field</a>
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
       <div class="chip teal lighten-2 white-text ">
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
     <button className="btn waves-effect waves-light" type="submit" name="action">
          Start a shift with this client
          <i className="material-icons right">send</i>
       </button>
    </Link>
     
  )
}