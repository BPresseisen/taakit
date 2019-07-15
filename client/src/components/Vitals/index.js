import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


export function VitalsButton(props) {
    return (
      <Link to="/shift">
       <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
         </button>
      </Link>
       
    )
  }


export function VitalsCard(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card teal lighted-1">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: 12345</span>
                        <p>Careperson: Dr. Quinn</p>
                        <p>Client: Gene Grogan</p>
                        <p>Date: 7/11/2019</p>
                        </div>
                        <div className="card-action">
                        <a href="/clientPage" className="white-text">Client Details &raquo;</a>
                        <a href="/shift" className="white-text">Shift Details &raquo;</a>
                    </div>
                </div>
            </div>
        </div>
   );
}

export function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }

export function VitalRating(props) {
    return (
        <div className="input-field col s12">
        <select>
        <option value="" disabled selected>N/A</option>
          {props.children}
        </select>
        <label>Wellness Level</label>
      </div>
    )
}

export function Selection(props) {
    return (
    <option value={props.score}>{props.assistanceRating}</option>
    )
}

export function VitalButton(props) {
    return (
        <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
         </button>
    )
}

export function VitalContainer(props) {
    return (
    <div>
        <ul className="collapsible">
            {props.children}
        </ul> 
    </div>
    );
}

export function Li(props) {
    return (
        <li>
            {props.children}
        </li>
    );
}
export function VitalTitle(props) {
    return (
        <div className="collapsible-header task-title teal-text">
            <AddIcon/>
            {props.task}
        </div>
    );
}

export function VitalExpand(props) {
    return (
        <div className="collapsible-body">
            <span>
           
            <p>
            {props.description}
            </p>
            <form action="#">
            <Input type="hidden" name="TimeStamp" value={props.timeStamp}/>
            <Input type="hidden" name="ShiftID" value={props.shiftID}/>
            <Input type="hidden" name="UserID" value={props.userID}/>
            <Input type="hidden" name="VitalType" value={props.VitalTypeID}/>
            <Input type="hidden" name="VitalScore" value={props.score}/>
            <Input type="hidden" name="VitalNote" value={props.note}/>
            <div>
                {props.children}
            </div>
            <VitalButton/>
            </form>
            </span>
        </div>
    );
}

export function AddIcon() {
    return (
        <i className="material-icons">add</i>
    );
}

export function InfoIcon() {
    return (
        <span className="badge">0</span>
    );
}

export function JointPain() {
    return (
        <Li>
        <VitalTitle task="Joint Pain - PAIN GROUP"/>
        <VitalExpand description="Pain originating from the physical point of connection between two bones.">
            <VitalRating>
                <Selection assistanceRating="Pain is greater since prior  assessment." score="1"/>
                <Selection assistanceRating="Pain is unchanged since prior  assessment" score="2"/>
                <Selection assistanceRating="Pain is reduced since prior assessment" score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function MusclePain() {
    return (
        <Li>
        <VitalTitle task="Muscular Pain - PAIN GROUP"/>
        <VitalExpand description="Pain originating from the muscles.">
            <VitalRating>
                <Selection assistanceRating="Pain is greater since prior assessment." score="1"/>
                <Selection assistanceRating="Pain is unchanged since prior assessment" score="2"/>
                <Selection assistanceRating="Pain is reduced since prior assessment" score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function NervePain() {
    return (
        <Li>
        <VitalTitle task="Neuropathic Pain - PAIN GROUP"/>
        <VitalExpand description="Pain originating from nerve impingement.">
            <VitalRating>
                <Selection assistanceRating="Pain is greater since prior assessment." score="1"/>
                <Selection assistanceRating="Pain is unchanged since prior assessment" score="2"/>
                <Selection assistanceRating="Pain is reduced since prior assessment" score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function GastroPain() {
    return (
        <Li>
        <VitalTitle task="Gastrointestinal Pain - PAIN GROUP"/>
        <VitalExpand description="Pain originating from stomach and intestines.">
            <VitalRating>
                <Selection assistanceRating="Pain is greater since prior assessment." score="1"/>
                <Selection assistanceRating="Pain is unchanged since prior assessment" score="2"/>
                <Selection assistanceRating="Pain is reduced since prior assessment" score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Appetite() {
    return (
        <Li>
        <VitalTitle task="Appetite - ENGINE GROUP"/>
        <VitalExpand description="General appetite level">
            <VitalRating>
                <Selection assistanceRating="Cliet exhbibits reduced appetite since prior assessment." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged since prior assessment." score="2"/>
                <Selection assistanceRating="Client exhibits increased appetite since prior asssessment." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function SleepQual() {
    return (
        <Li>
        <VitalTitle task="Sleep Quality - ENGINE GROUP"/>
        <VitalExpand description="One's satisfaction of the sleep experience, integrating aspects of sleep initiation, sleep maintenance, sleep quantity, and refreshment upon awakening.">
            <VitalRating>
                <Selection assistanceRating="Client describes lower sleep quality." score="1"/>
                <Selection assistanceRating="Client describes unchanged sleep quality." score="2"/>
                <Selection assistanceRating="Client describes higher sleep quality." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Fatigue() {
    return (
        <Li>
        <VitalTitle task="Fatigue - ENGINE GROUP"/>
        <VitalExpand description="Extreme tiredness resulting from mental or physical exertion or illness.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits higher fatigue behaviors." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged fatigue behvaviors." score="2"/>
                <Selection assistanceRating="Client exhibits lower fatigue behaviors." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function BodyTemp() {
    return (
        <Li>
        <VitalTitle task="Body Temperature - ENGINE GROUP"/>
        <VitalExpand description="Overall Body Temperature">
            <VitalRating>
                <Selection assistanceRating="Client describes lower body temperature since prior assessment." score="1"/>
                <Selection assistanceRating="Client describes unchanged body temperature since prior assessment." score="2"/>
                <Selection assistanceRating="Client describes higher body temperature since prior assessment. appetite since prior asssessment." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function ShortBreath() {
    return (
        <Li>
        <VitalTitle task="Breath Control - ENGINE GROUP"/>
        <VitalExpand description="Difficulty in breathing or strained, labored effort to breathe.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased shortness of breath." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged shortness of breath." score="2"/>
                <Selection assistanceRating="Client exhibits decreased shortness of breath." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Hypertonicity() {
    return (
        <Li>
        <VitalTitle task="Hypertonicity -  BALLAST GROUP"/>
        <VitalExpand description="Spastic dystonia is a continual increase in the muscle tension compared to normal resting tension, regardless of movement.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased hypertonicity." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged hypertonicity." score="2"/>
                <Selection assistanceRating="Client exhibits decreased hypertonicity." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Jitteriness() {
    return (
        <Li>
        <VitalTitle task="Jitteriness - BALLAST GROUP"/>
        <VitalExpand description="Any involuntary movement; Hallmark of a tremor.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased jitteriness." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged jitteriness." score="2"/>
                <Selection assistanceRating="Client exhibits decreased jitteriness." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Socialization() {
    return (
        <Li>
        <VitalTitle task="Socialization - BALLAST GROUP"/>
        <VitalExpand description="Likelihood and tendency to socialize with others.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits decreased socialization." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged socialization." score="2"/>
                <Selection assistanceRating="Client exhibits increased socialization." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Mobility() {
    return (
        <Li>
        <VitalTitle task="Mobility - BALLAST GROUP"/>
        <VitalExpand description="The ability to move or be moved freely and easily.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits decreased mobility." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged mobility." score="2"/>
                <Selection assistanceRating="Client exhibits increased mobility." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Balance() {
    return (
        <Li>
        <VitalTitle task="Balance - BALLAST GROUP"/>
        <VitalExpand description="An even distribution of weight enabling someone or something to remain upright and steady.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits decreased balance." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged balance." score="2"/>
                <Selection assistanceRating="Client exhibits increased balance." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Vigor() {
    return (
        <Li>
        <VitalTitle task="Vigor - SENTIMENT GROUP"/>
        <VitalExpand description="Effort, energy, and enthusiasm.">
            <VitalRating>
                <Selection assistanceRating="Client generally exhibits decreased vigor." score="1"/>
                <Selection assistanceRating="Client generally exhibits unchanged vigor levels." score="2"/>
                <Selection assistanceRating="Client generally increased vigor." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Moodiness() {
    return (
        <Li>
        <VitalTitle task="Moodiness - SENTIMENT GROUP"/>
        <VitalExpand description="The constantly changing states of being contented one moment, then sad the next, then angry, then joyous and then irritable.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased moodiness." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged moodiness." score="2"/>
                <Selection assistanceRating="Client exhibits decreased moodiness." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Calmness() {
    return (
        <Li>
        <VitalTitle task="Calmness - SENTIMENT GROUP"/>
        <VitalExpand description="The state or quality of being free from agitation, disturbance or strong emotion.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased calmness." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged calmness." score="2"/>
                <Selection assistanceRating="Client exhibits decreased calmness." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Loqquacity() {
    return (
        <Li>
        <VitalTitle task="Loquacity - SENTIMENT GROUP"/>
        <VitalExpand description="The quality of talking a great deal; talkativeness.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased nervousness." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged nervousness." score="2"/>
                <Selection assistanceRating="Client exhibits decreased nervousness." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Restlessness() {
    return (
        <Li>
        <VitalTitle task="Restlessness - SENTIMENT GROUP"/>
        <VitalExpand description="The inability to rest or relax as a result of anxiety or boredom.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased restlessness." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged restlessness." score="2"/>
                <Selection assistanceRating="Client exhibits decreased restlessness." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Impatience() {
    return (
        <Li>
        <VitalTitle task="Impatience - SENTIMENT GROUP"/>
        <VitalExpand description="The tendency to be impatient; irritability or restlessness.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased impatience." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged impatience." score="2"/>
                <Selection assistanceRating="Client exhibits decreased impatience." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Hypermotility() {
    return (
        <Li>
        <VitalTitle task="Hypermotility - DEBRIS GROUP"/>
        <VitalExpand description="Abnormal or excessive movement in the bowels">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased hypermotility." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged hypermotility." score="2"/>
                <Selection assistanceRating="Client exhibits decreased hypermotility." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Continence() {
    return (
        <Li>
        <VitalTitle task="Continence - DEBRIS GROUP"/>
        <VitalExpand description="The ability to control movements of the bowels and bladder.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits decreased continence." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged continence." score="2"/>
                <Selection assistanceRating="Client exhibits increased continence." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}
export function Constipation() {
    return (
        <Li>
        <VitalTitle task="Constipation - DEBRIS GROUP"/>
        <VitalExpand description="Infrequent bowel movements, and small, hard-to-pass, stool.">
            <VitalRating>
                <Selection assistanceRating="Client exhibits increased constipation." score="1"/>
                <Selection assistanceRating="Client exhibits unchanged constipation." score="2"/>
                <Selection assistanceRating="Client exhibits decreased constipation." score="3"/>
            </VitalRating>
        </VitalExpand>     
        </Li>
    );
}

