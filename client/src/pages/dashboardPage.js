import React, { Component, Fragment } from 'react';
import { ClientChip, ClientChip2, ClientChip3, ClientChip4 } from '../components/Clients';
import { ShiftChip, ShiftChip2, ShiftChip3, ShiftChip4, ShiftChip9 } from '../components/Shift';
import "materialize-css/dist/css/materialize.min.css";
import LoggedIn from '../layout/loggedIn';

class DashboardPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                <div className="row">
                    <div className="col s12 center">
                    <LoggedIn/>
                    </div>
                </div>
                   <div className="row">
                        <div className="col s12  center formTitle">
                            Your Dashboard
                        </div>
                    </div>
                    <div className="row flex center">
                   
                        <div className="col s12 l6 center card pad">
                            <div className="col s12">
                                <h5>Your Clients </h5>
                                <br/>
                                <ClientChip/>
                                <ClientChip2/>
                                <ClientChip3/>
                                <ClientChip4/>
                                <br/> 
                                <br/>
                            </div>
                            
                        </div>
                      
                        <div className="col s12 l6 center card pad">
                        <h5>Recent Shifts</h5>
                            <br/>
                            <div>
                            <ShiftChip/><ShiftChip2/><ShiftChip3/><ShiftChip4/><ShiftChip9/>
                            <br/>
                            <br/>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment> 
        )
    }
}
export default DashboardPage;