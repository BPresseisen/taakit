import React, { Component, Fragment } from 'react';
import { Med } from '../components/Grid';
import { Redirect } from 'react-router-dom';
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
import axios from 'axios';





class TasksPage extends Component {

    constructor() {
        super()
        this.state = {
            date: '',
            clientID: '',
            clientName: '',
            task: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
    
        axios
            .post('/shift/tasks', {
                date: this.state.date,
                clientID: this.state.clientID,
                clientName: this.state.clientName,
                task: this.state.task
            })
            .then(response => {
                console.log('post task: ')
                console.log(response)
                if (response.status === 200) {
                    this.setState({
                        redirectTo: true
                    }, ()=> console.log(this.state.redirectTo))
                }
            }).catch(error => {
                console.log('error: ')
                console.log(error);
                
            })
    }
    componentDidMount() {
        M.AutoInit();
    }

    toast(){
        M.toast({html: 'Task logged!'})
    }
    render() {
        if (this.state.redirectTo===true) {
            return <Redirect to="/shift" />
        }
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