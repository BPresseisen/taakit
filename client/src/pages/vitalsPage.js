import React, { Component, Fragment } from 'react';
import {Med} from '../components/Grid'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { 
    VitalContainer,
    JointPain, 
    MusclePain,
    NervePain,
    GastroPain,
    Appetite,
    BodyTemp,
    Vigor,
    SleepQual,
    Fatigue,
    Mobility,
    Balance,
    ShortBreath,
    Moodiness,
    Calmness,
    Loqquacity,
    Restlessness,
    Impatience,
    Hypermotility,
    Continence,
    Constipation,
    Hypertonicity,
    Jitteriness,
    Socialization,
    VitalButton
  
} from "../components/Vitals";


class VitalsPage extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <Fragment>
            <Med>
                <h2>Vitals</h2>
            </Med>
            <Med>
                <VitalContainer>
                        <JointPain/>
                        <MusclePain/>
                        <NervePain/>
                        <GastroPain/>
                        <Appetite/>
                        <BodyTemp/>
                        <Vigor/>
                        <SleepQual/>
                        <Fatigue/>
                        <Mobility/>
                        <Balance/>
                        <ShortBreath/>
                        <Moodiness/>
                        <Calmness/>
                        <Loqquacity/>
                        <Restlessness/>
                        <Impatience/>
                        <Hypermotility/>
                        <Continence/>
                        <Constipation/>
                        <Continence/>
                        <Hypertonicity/>
                        <Jitteriness/>
                        <Socialization/>
                    </VitalContainer>
                    <VitalButton/>
                </Med>
            </Fragment>     
        )
    }
}
export default VitalsPage;