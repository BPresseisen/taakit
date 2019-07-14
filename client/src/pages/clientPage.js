import React, { Component, Fragment } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import { ClientProfile, ShiftChip, ShiftStartButton } from '../components/Clients';
import { Slim, Med } from '../components/Grid';


class ClientPage extends Component {
    render() {
        return (
            <Fragment>
                <Med>
                    <ClientProfile/>
                </Med>
                <Med>
                    <ShiftStartButton/>
                </Med>
                <Med>
                    <h3>Previous Shifts</h3>
                    <ShiftChip/><ShiftChip/><ShiftChip/><ShiftChip/>
                </Med>
            </Fragment>
        )
    }
}
export default ClientPage;