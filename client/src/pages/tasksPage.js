import React, { Component } from 'react';
import { 
    TaskContainer, 
    Feeding,
    FoodPrep,
    Medication,
    Bathroom,
    Bathing,
    Dressing,
    PhysicalAssistance,
    Transportation,
    Shopping,
    MediaAssistance,
    Housekeeping
} from "../components/Tasks";


class TasksPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 l6 offset-l3 center">
                      <h2> Date | Shift ID | Patient Name<br/></h2>
                       <h3>Todays Shift (link) >></h3>
                      

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
                    <TaskContainer>
                            <FoodPrep/>
                            <Feeding/>
                            <Medication/>
                            <Bathroom/>
                            <Bathing/>
                            <Dressing/>
                            <Housekeeping/>
                            <PhysicalAssistance/>
                            <Transportation/>
                            <Shopping/>
                            <MediaAssistance/>
                        </TaskContainer>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default TasksPage;