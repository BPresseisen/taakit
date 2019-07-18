import React, { Component, Fragment } from 'react';
import { TaskContainer } from '../components/Tasks';
import { SubmittedTasks, SubmittedTasks2, 
    SubmittedTasks5, 
    SubmittedTasks6,  ShiftCard3 } from '../components/Shift';
import { Med } from '../components/Grid';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";



class ShiftPage extends Component {
    
    constructor() {
        super();
        this.state = {
            shiftID: "",
            userID: "",
            clientName: "",
            startDate: "",

        }
    }

    componentDidMount() {
        M.AutoInit();
        
    }

    render() {

        return (
            <Fragment>
                <div className="row">
                        <div className="col s12  center formTitle">
                            Shift Detail
                        </div>
                    </div>
            <Med>
               <ShiftCard3/>
            </Med>
            <Med>
                <TaskContainer>
                    {/* For loop */}
                    <SubmittedTasks/>
                    <SubmittedTasks2/>
                    <SubmittedTasks6/>
                    <SubmittedTasks5/>
                </TaskContainer>
            </Med>
            </Fragment>
        )
    }
}
export default ShiftPage;