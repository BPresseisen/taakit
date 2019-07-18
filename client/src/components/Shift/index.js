import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

var shift = {
    s01: {fullName: "Gene Grogan", clientID: "C00001", userID: "Sean Munley", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s02: {fullName: "Gene Grogan", clientID: "C00001", userID: "", startTime: "07/11/2019 18:00:00", endTime: "07/12/2019 00:00:00"},
    s03: {fullName: "Gene Grogan", clientID: "C00001", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s04: {fullName: "Gail Lefebre", clientID: "C00004", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s05: {fullName: "Phil Lancaster", clientID: "C00005", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s06: {fullName: "Phil Lancaster", clientID: "C00005", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s07: {fullName: "Phil Lancaster", clientID: "C00005", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s08: {fullName: "George Friedel", clientID: "C00008", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s09: {fullName: "Rita Garcia", clientID: "C00009", userID: "", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"}
  }

  export function ShiftCard(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s01</span>
                        <p>Careperson: {shift.s01.userID}</p>
                        <p>Client: {shift.s01.fullName}</p>
                        <p>Date: {shift.s01.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <Link to="/shift" className="white-text">Shift Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ArchiveIcon() {
    return (
        <i className="tiny material-icons">archive</i>
    );
}

export function TaskContainer(props) {
    return (
    <div>
        <ul className="collapsible">
            {props.children}
        </ul> 
    </div>
    );
}

export function Li(props) {
    return (
        <li>
            {props.children}
        </li>
    );
}
export function SubmittedTaskTitle(props) {
    return (
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/>
            {props.task}
                </div>
                <div className="task-id">
                    Task ID: {props.taskID}<br/>
                </div>
        </div>
    );
}

export function SubmittedTaskExpand(props) {
    var task = {
        timeStamp: "7/11/2019",
        shiftID: "00001",
        taskID: "00001",
        userID: "00001",
        fullName: "Gene Grogan",
        taskTypeID: "Food Preparating",
        score: "2 Prepares adequate meals if supplied with ingredients",
        note: ""
      };
    return (
        <div className="collapsible-body">
                <ul>
                    <li><span className="teal-text">Patient Name:</span> {task.fullName}</li>
                    <li><span className="teal-text">Score:</span>  {task.score}</li>
                    <li><span className="teal-text">Time Logged:</span>  {task.timeStamp}</li>
                </ul>
                
        </div>
    );
}



export function SubmittedTasks() {
    return (
        <Li>
        <SubmittedTaskTitle task="Food Preparation" taskID="00001" timeStamp="07/11/2019 14:00"/>
        <SubmittedTaskExpand description="Helping prepare meals."/>
        </Li>
    );
}
