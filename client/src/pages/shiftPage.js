import React, { Component } from 'react';
import { TaskContainer } from '../components/Tasks';
import { SubmittedTasks } from '../components/Shift';



class ShiftPage extends Component {
    



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 l6 offset-l3 center">
                      <h2> Date | Shift ID | Patient Name<br/></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                        <TaskContainer>
                            <SubmittedTasks/>
                        </TaskContainer>

                        <TaskContainer>
                            <SubmittedTasks/>
                        </TaskContainer>

                        <TaskContainer>
                            <SubmittedTasks/>
                        </TaskContainer>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default ShiftPage;