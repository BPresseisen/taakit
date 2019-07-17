import React, { Component, Fragment } from 'react';
import { Med } from '../components/Grid';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { 
    TaskContainer, 
    Feeding,
    FoodPrep,
    Medication,
    Toileting,
    Bathing,
    Laundry,
    Dressing,
    Mobility,
    Transportation,
    Shopping,
    MediaTech,
    Housekeeping, 
    ShiftCard
} from "../components/Tasks";




class TasksPage extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    toast(){
        M.toast({html: 'Task logged!'})
    }
    render() {
        return (
           
           <Fragment>
               <div className="row">
                        <div className="col s12  center formTitle">
                            Tasks
                        </div>
                    </div>
               <Med>
               <ShiftCard/>
               </Med>
               <Med>
               <TaskContainer>
                    <FoodPrep/>
                    <Feeding/>
                    <Medication/>
                    <Toileting/>
                    <Bathing/>
                    <Laundry/>
                    <Dressing/>
                    <Housekeeping/>
                    <Mobility/>
                    <Transportation/>
                    <Shopping/>
                    <MediaTech/>
                </TaskContainer>
               </Med>
           </Fragment>
                      
                   
                       
                   
                 
                 
            
        )
    }
}
export default TasksPage;