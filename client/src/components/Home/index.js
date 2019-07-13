import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export function PatientContainer(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 offset-m3 center">
                    <SearchForm/>
                </div>
            </div>
            
            <div className="row">
                <div className="col s12 l6 offset-l3 center">
                <h3>Your Patients:</h3>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function PatientChip(props) {
    var patient = {
        fullName: "Gene Grogan",
        userID: "12345"
    }
    return (
        <Link to="patients/userID">
         <div class="chip teal lighten-2 white-text ">
             <i class="tiny material-icons">folder_shared</i> &nbsp;
           {patient.fullName}
             <i class="close material-icons">close</i>
        </div>
        </Link>
       
    )
}


export default function SearchForm({ onSearch }) {
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
        <button className="btn waves-effect waves-light" onClick={search} type="button">
        <i class="material-icons left">&nbsp;&nbsp;</i> Search<i class="material-icons right">search</i>
        </button>
      </form>
    );
  }
