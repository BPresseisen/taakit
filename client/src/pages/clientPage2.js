import React, { Component, Fragment } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { ClientProfile2, ShiftStartButton } from '../components/Clients';
import { ShiftChip3, ShiftChip5, ShiftChip7 } from '../components/Shift';
import { Med } from '../components/Grid';
import M from "materialize-css/dist/js/materialize.min.js";



class ClientPage extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    
    render() {
        return (
            <Fragment>
                <div className="row">
                        <div className="col s12  center formTitle">
                            Client Page
                        </div>
                    </div>
                <Med>
                    <ClientProfile2/>
                </Med>
                <Med>
                    <ShiftStartButton/>
                </Med>
                <Med>
                    <h5>Previous Shifts</h5>
                    {/* For loop */}
                    <ShiftChip3/> <ShiftChip5/> <ShiftChip7/>
                </Med>
            </Fragment>
        )
    }
}
export default ClientPage;