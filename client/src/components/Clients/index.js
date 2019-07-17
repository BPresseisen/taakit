import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";


var patient = {
  Gene: {fullName: "Gene Grogan", userID: "00001", address: "580  Snowbird Lane", phone: "402-681-5153", email: "ytib68hpyhb@payspun.com"},
  Betty: {fullName: "Betty Looney", userID: "00002", address: "256  Progress Way", phone: "320-233-3162", email: "j6lidtnli4a@payspun.com"},
  Al: {fullName: "Al Massie", userID: "00003", address: "3365  Old House Drive", phone: "740-965-8917", email: "0tev9hg2d35@iffymedia.com"},
  Gail: {fullName: "Gail Lefebre", userID: "00004", address: "1390  Hanover Street", phone: "917-660-7686", email: "m0m2v364bv@iffymedia.com"},
  Phil: {fullName: "Phil Lancaster", userID: "00005", address: "817  Charack Road", phone: "812-314-2473", email: "bmfki9bh9tc@thrubay.com"},
  Shannon: {fullName: "Shanoon Hallock", userID: "00006", address: "2502  Goldcliff Circle", phone: "202-647-5866", email: "ha0u68h8wzu@claimab.com"},
  Jerry: {fullName: "Jerry Saldana", userID: "00007", address: "2795  Maryland Avenue", phone: "727-578-1970", email: "q35sv11wg9m@thrubay.com"},
  George: {fullName: "George Friedel", userID: "00008", address: "2015  Turnpike Drive", phone: "256-330-9259", email: "lwpvjmqcp@iffymedia.com"},
  Rita: {fullName: "Rita Garcia", userID: "00009", address: "2545  Public Works Drive", phone: "423-348-0554", email: "ld4wt3k7hcn@payspun.com"}
}

export function ClientProfile(props) {
    return (
        <div className="collection ">
        <a href="#!" className="collection-item active teal"> {patient.Gene.fullName}</a>
        <a href="https://google.com/maps/place/{patient.Gene.address}" target="_blank" rel="noopener noreferrer" className="collection-item teal-text"> {patient.Gene.address}</a>
        <a href="mailto:{patient.Gene.email}" className="collection-item teal-text"> {patient.Gene.email}</a>
        <a href="tel:{patient.Gene.phone}" className="collection-item teal-text"> {patient.Gene.phone}</a>
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
       <div className="chip grey darken-2 white-text">
       <i className="tiny material-icons">assignment_ind</i>
         &nbsp;&nbsp;{shift.timeStamp}
           <i className="close material-icons">add_circle_outline</i>
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
 
  return (
      <Link to="/client">
       <div className="chip teal white-text ">
           <i className="tiny material-icons">folder_shared</i> &nbsp;
         {patient.Gene.fullName}
           <i className="close material-icons">add_circle_outline</i>
      </div>
      </Link>
     
  )
}