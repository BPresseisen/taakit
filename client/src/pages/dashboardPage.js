import React, { Component, Fragment } from 'react';
import { ShiftChip, ClientChip } from '../components/Clients';
import "materialize-css/dist/css/materialize.min.css";
import LoggedIn from '../layout/loggedIn';

class DashboardPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                   <div className="row">
                        <div className="col s12  center formTitle">
                            Your Dashboard
                        </div>
                    </div>
                    <div className="row flex center">
                    <LoggedIn/>
                        <div className="col s12 l6 center card pad">
                            {/* <div className="col s12">
                                <h4>Clients</h4>
                                <div className="col s12">
                                    <Link to="/createclient">
                                        <AddClient/>
                                    </Link>
                                </div>
                            </div> */}
                            <div className="col s12">
                                <h5>Your Clients </h5>
                                <br/>
                                <ClientChip/>
                                <ClientChip/>
                                <ClientChip/>
                                <ClientChip/>
                                <br/> 
                                <br/>
                            </div>
                            
                        </div>
                      
                        <div className="col s12 l6 center card pad">
                        <h5>Recent Shifts</h5>
                            <br/>
                            <div>
                            <ShiftChip/><ShiftChip/><ShiftChip/><ShiftChip/>
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