import React, { Component, Fragment } from 'react';
import { TaskContainer, ShiftCard } from '../components/Tasks';
import { SubmittedTasks } from '../components/Shift';
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
            <Med>
               <ShiftCard/>
            </Med>
            <Med>
                <TaskContainer>
                    {/* For loop */}
                    <SubmittedTasks/>
                </TaskContainer>
            </Med>
            </Fragment>
        )
    }
}
export default ShiftPage;