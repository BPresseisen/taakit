import React, { Component, Fragment } from 'react';
import { Med } from '../components/Grid';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { ShiftCard } from  '../components/Shift'
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
    Housekeeping
} from '../components/Tasks';




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
                            Log Tasks
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