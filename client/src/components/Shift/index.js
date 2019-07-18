import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

var shift = {
    s01: {fullName: "Gene Grogan", clientID: "C00001", userID: "Ben Presseisen", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s02: {fullName: "Gene Grogan", clientID: "C00001", userID: "Sean Munley", startTime: "07/11/2019 18:00:00", endTime: "07/12/2019 00:00:01"},
    s03: {fullName: "Betty Looney", clientID: "C00002", userID: "Ben Presseisen", startTime: "07/12/2019 08:00:00", endTime: "07/12/2019 18:00:00"},
    s04: {fullName: "Gene Grogan", clientID: "C00001", userID: "Sean Munley", startTime: "07/12/2019 18:00:00", endTime: "07/13/2019 00:00:01"},
    s05: {fullName: "Betty Looney", clientID: "C00002", userID: "Ben Presseisen", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s06: {fullName: "Betty Looney", clientID: "C00002", userID: "Ben Presseisen", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s07: {fullName: "Al Massie", clientID: "C00003", userID: "Kate Williams", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s08: {fullName: "Gail Lefebre", clientID: "C00004", userID: "Sean Munley", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s09: {fullName: "Gene Grogan", clientID: "C00001", userID: "Sean Munley", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"},
    s10: {fullName: "Gail Lefebre", clientID: "C00004", userID: "Sean Munley", startTime: "07/11/2019 08:00:00", endTime: "07/11/2019 18:00:00"}

}



var task = {
    t00001: {
        timeStamp: "7/11/2019",
        taskID: "00001",
        taskTypeID: "Food Preparating",
        score: "Prepares adequate meals if supplied with ingredients"
    },
    t00002: {
        timeStamp: "7/11/2019",
        taskID: "00002",
        taskTypeID: "Feeding",
        score: "Needs partial or total help with feeding"
    },
    t00003: {
        timeStamp: "7/11/2019",
        taskID: "00003",
        taskTypeID: "Medication",
        score: "Is not capable of dispensing own medication"
    },
    t00004: {
        timeStamp: "7/11/2019",
        taskID: "00004",
        taskTypeID: "Toileting",
        score: "Needs help transferring to the toilet, cleaning self or uses bedpan or commode"
    },
    t00005: {
        timeStamp: "7/11/2019",
        taskID: "00005",
        taskTypeID: "Bathing",
        score: "Needs htlp with bathing more than one part of the body, getting in or out of the tub or shower. Requires total bathing"
    },
    t00006: {
        timeStamp: "7/11/2019",
        taskID: "00006",
        taskTypeID: "Mobility",
        score: "Move in and out of bed or chair unassisted. Mechanical transfer aids are acceptable"
    },
    t00007: {
        timeStamp: "7/11/2019",
        taskID: "00007",
        taskTypeID: "Housekeeping",
        score: "Does not participate in any housekeeping tasks"
    },
    t00008: {
        timeStamp: "7/11/2019",
        taskID: "00008",
        taskTypeID: "Laundry",
        score: "All laundry must be done by others"
    }
   
  };

  export function ShiftChip(props) {
    return (
          <Link to="shift">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s01.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip2(props) {
    return (
          <Link to="shift2">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s02.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip3(props) {
    return (
          <Link to="shift3">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s03.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip4(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s04.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip5(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s05.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip6(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s06.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip7(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s07.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip8(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s08.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip9(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s09.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
  }
  export function ShiftChip10(props) {
    return (
          <Link to="shift4">
         <div className="chip grey darken-2 white-text">
         <i className="tiny material-icons">assignment_ind</i>
           &nbsp;&nbsp;{shift.s10.endTime}
             <i className="close material-icons">add_circle_outline</i>
        </div>
        </Link>
       
    )
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
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard2(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s02</span>
                        <p>Careperson: {shift.s02.userID}</p>
                        <p>Client: {shift.s02.fullName}</p>
                        <p>Date: {shift.s02.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard3(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s03</span>
                        <p>Careperson: {shift.s03.userID}</p>
                        <p>Client: {shift.s03.fullName}</p>
                        <p>Date: {shift.s03.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard4(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s04.userID}</p>
                        <p>Client: {shift.s04.fullName}</p>
                        <p>Date: {shift.s04.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard5(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s05.userID}</p>
                        <p>Client: {shift.s05.fullName}</p>
                        <p>Date: {shift.s05.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard6(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s06.userID}</p>
                        <p>Client: {shift.s06.fullName}</p>
                        <p>Date: {shift.s06.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard7(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s07.userID}</p>
                        <p>Client: {shift.s07.fullName}</p>
                        <p>Date: {shift.s07.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard8(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s08.userID}</p>
                        <p>Client: {shift.s08.fullName}</p>
                        <p>Date: {shift.s08.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard9(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s09.userID}</p>
                        <p>Client: {shift.s09.fullName}</p>
                        <p>Date: {shift.s09.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
                        <a href="/dashboard" className="waves-effect waves-light btn grey lighten-2 black-text"><i className="material-icons right">done</i>End Shift</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function ShiftCard10(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: s04</span>
                        <p>Careperson: {shift.s10.userID}</p>
                        <p>Client: {shift.s10.fullName}</p>
                        <p>Date: {shift.s10.endTime}</p>
                        </div>
                        <div className="card-action">
                        <Link to="/client" className="white-text">Client Details &raquo;</Link>
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


export function SubmittedTaskExpand(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00001.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00001.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00001.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00001.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}

export function SubmittedTaskExpand2(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00002.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00002.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00002.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00002.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}

export function SubmittedTaskExpand3(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00003.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00003.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00003.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00003.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}

export function SubmittedTaskExpand4(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00004.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00004.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00004.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00004.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}

export function SubmittedTaskExpand5(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00005.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00005.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00005.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00005.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}

export function SubmittedTaskExpand6(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00006.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00006.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00006.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00006.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}


export function SubmittedTaskExpand7(props) {
    return (
        <Fragment>
        <div className="collapsible-header task-title teal-text">
            <div>
            <ArchiveIcon/> {task.t00007.taskTypeID}
                </div>
                <div className="task-id">
                    Task ID: {task.t00007.taskID}<br/>
                </div>
            </div>
            <div className="collapsible-body">
                    <ul>
                        <li><span className="teal-text">Score:</span>  {task.t00007.score}</li>
                        <li><span className="teal-text">Time Logged:</span>  {task.t00007.timeStamp}</li>
                    </ul>
                
        </div>
        </Fragment>
    );
}



export function SubmittedTasks() {
    return (
        <Li>
        <SubmittedTaskExpand/>
        </Li>
    );
}

export function SubmittedTasks2() {
    return (
        <Li>
        <SubmittedTaskExpand2/>
        </Li>
    );
}

export function SubmittedTasks3() {
    return (
        <Li>
        <SubmittedTaskExpand3/>
        </Li>
    );
}

export function SubmittedTasks4() {
    return (
        <Li>
        <SubmittedTaskExpand4/>
        </Li>
    );
}

export function SubmittedTasks5() {
    return (
        <Li>
        <SubmittedTaskExpand5/>
        </Li>
    );
}

export function SubmittedTasks6() {
    return (
        <Li>
        <SubmittedTaskExpand6/>
        </Li>
    );
}

export function SubmittedTasks7() {
    return (
        <Li>
        <SubmittedTaskExpand7/>
        </Li>
    );
}