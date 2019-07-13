import React, { Component } from 'react'
import { PatientContainer, PatientChip } from '../components/Home';

class HomePage extends Component {
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
export default HomePage;