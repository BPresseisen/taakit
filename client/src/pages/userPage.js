import React, { Component } from 'react'
import { PatientContainer, PatientChip } from '../components/User';
import "materialize-css/dist/css/materialize.min.css";

class UserPage extends Component {
    render() {
        return (
            <PatientContainer>
                {/* We will for loop these, repeating just for visual  */}
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />
                <PatientChip />


            </PatientContainer> 
        )
    }
}
export default UserPage;