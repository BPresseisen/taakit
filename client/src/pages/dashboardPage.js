import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {  } from '../components/User';
import { ShiftChip, AddClient, ClientChip, SearchForm } from '../components/Clients';
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import LoggedIn from '../layout/loggedIn';

class DashboardPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                   <div className="row">
                        <div className="col s12  center formTitle">
                            Dashboard
                        </div>
                    </div>
                    <div className="row flex center">
                    <LoggedIn/>
                        <div className="col s12 l6 center card pad">
                            <div className="col s12">
                                <h4>Clients</h4>
                                <div className="col s12 m6">
                                    <Link to="/createclient">
                                        <AddClient/>
                                    </Link>
                                </div>
                                <div className="col s12 m6">
                                    <SearchForm/>
                                </div>
                             <div>

                             </div>
                            </div>
                            <div className="col s12">
                                <h4>Your Clients </h4>
                                <ClientChip/>
                                <ClientChip/>
                                <ClientChip/>
                                <ClientChip/>
                                <br/> 
                                <br/>
                            </div>
                            
                        </div>
                      
                        <div className="col s12 l6 center card pad">
                        <h4>Recent Shifts</h4>
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