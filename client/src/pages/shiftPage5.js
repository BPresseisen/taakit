import React, { Component, Fragment } from 'react';
import { TaskContainer } from '../components/Tasks';
import { SubmittedTasks, SubmittedTasks2, 
    SubmittedTasks3, 
    SubmittedTasks4, 
    SubmittedTasks5, ShiftCard5 } from '../components/Shift';
import { Med } from '../components/Grid';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";



class ShiftPage extends Component {
    
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
               <ShiftCard5/>
            </Med>
            <Med>
                <TaskContainer>
                    {/* For loop */}
                    <SubmittedTasks/>
                    <SubmittedTasks2/>
                    <SubmittedTasks3/>
                    <SubmittedTasks4/>
                    <SubmittedTasks5/>
                </TaskContainer>
            </Med>
            </Fragment>
        )
    }
}
export default ShiftPage;