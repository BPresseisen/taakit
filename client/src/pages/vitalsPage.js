import React, { Component } from 'react';
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
    Socialization
  
} from "../components/Vitals";


class VitalsPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 l6 offset-l3 center">
                      <h2> Date | Shift ID | Patient Name<br/></h2>
                       <h3>Todays Shift (link) >></h3>
                      

                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l6 offset-l3">
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
                    </div>
                </div>
            </div>
            
        )
    }
}
export default VitalsPage;