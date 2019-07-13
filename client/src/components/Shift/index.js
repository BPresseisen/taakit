import React from 'react';
import "./style.css";

export function NotesButton(props) {
    return (
        <button class="btn waves-effect waves-light teal-text" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
         </button>
    )
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
                    Logged: {props.timeStamp}
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
                    <li><span className="teal-text">Notes:</span>  {task.notes}</li>
                </ul>
                <div className="row">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix teal-text">chat</i>
                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Notes about the taakit task</label>
                        </div>
                    </div>
                    <NotesButton/>
                    </form>
                </div>
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


// timeStamp: { type: Date, default: Date.now },
// shiftID: { type: Number, required: true },
// userID:  { type: Number, required: true },
// taskTypeID: { type: Number, required: true },
// score: { type: Number, required: true },
// note: { type: String, required: false }