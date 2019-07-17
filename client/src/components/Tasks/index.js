import React from 'react';
import "./style.css";

export function ShiftCard(props) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card grey darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Shift ID: 12345</span>
                        <p>Careperson: Dr. Quinn</p>
                        <p>Client: Gene Grogan</p>
                        <p>Date: 7/11/2019</p>
                        </div>
                        <div className="card-action">
                        <a href="/client" className="white-text">Client Details &raquo;</a>
                        <a href="/shift" className="white-text">Shift Details &raquo;</a>
                        <a href="/dashboard" class="waves-effect waves-light btn grey lighten-2 black-text"><i class="material-icons right">done</i>End Shift</a>
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

export function TaskRating(props) {
    return (
        <div className="input-field col s12">
        <select>
        <option value="" disabled selected>N/A</option>
          {props.children}
        </select>
        <label>Assistance Level</label>
      </div>
    )
}

export function Selection(props) {
    return (
    <option value={props.score}>{props.assistanceRating}</option>
    )
}

export function TaskButton(props) {
    return (
        <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
            <i className="material-icons right">send</i>
         </button>
    )
}

export function TaskContainer(props) {
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
export function TaskTitle(props) {
    return (
        <div className="collapsible-header task-title teal-text">
            <AddIcon/>
            {props.task}
        </div>
    );
}

export function TaskExpand(props) {
    return (
        <div className="collapsible-body">
            <span>
           
            <p>
            {props.description}
            </p>
            <form action="#">
            <Input type="hidden" name="TaskType" value={props.timeStamp}/>
            <Input type="hidden" name="ShiftID" value={props.shiftID}/>
            <Input type="hidden" name="UserID" value={props.userID}/>
            <Input type="hidden" name="TaskType" value={props.taskTypeID}/>
            <Input type="hidden" name="TaskScore" value={props.score}/>
            <Input type="hidden" name="ShiftNote" value={props.note}/>
            <div>
                {props.children}
            </div>
            <TaskButton onClick={props.toast} />
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

export function FoodPrep() {
    return (
        <Li>
        <TaskTitle task="Food preparation"/>
        <TaskExpand description="Helping prepare meals.">
            <TaskRating>
                <Selection assistanceRating="Plans, prepares and serves adequate meals independently" score="1"/>
                <Selection assistanceRating="Prepares adequate meals if supplied with ingredients" score="2"/>
                <Selection assistanceRating="Heats, serves and prepares meals, or prepares meals, or prepares meals but does not maintain adequate diet" score="3"/>
                <Selection assistanceRating="Plans, prepares and serves adequate meals independently" score="4"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Feeding() {
    return (
        <Li>
        <TaskTitle task="Feeding"/>
        <TaskExpand description="Physical assistance with feeding.">
            <TaskRating>
                <Selection assistanceRating="Gets food from plate into mouth without help. Preparation of food may be done by another person. " score="1"/>
                <Selection assistanceRating="Needs partial or total help with feeding or requires parenteral feeding." score="2"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Medication() {
    return (
        <Li>
        <TaskTitle task="Medication"/>
        <TaskExpand description="Helping the patient adhere to their medication schedule.">
            <TaskRating>
                <Selection assistanceRating="Is responsible for taking medication in correct dosages at correct time" score="1"/>
                <Selection assistanceRating="Takes responsibility if medication is prepared in advance in separate dosage" score="2"/>
                <Selection assistanceRating="Is not capable of dispensing own medication" score="3"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Toileting() {
    return (
        <Li>
        <TaskTitle task="Toileting"/>
        <TaskExpand description="Helping the patient with toileting.">
            <TaskRating>
                <Selection assistanceRating="Goes to toilet, gets on and off, arranges clothes, cleans genital area without help." score="1"/>
                <Selection assistanceRating="Needs help transferring to the toilet, cleaning self or uses bedpan or commode." score="2"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Bathing() {
    return (
        <Li>
        <TaskTitle task="Bathing"/>
        <TaskExpand description="Assistance with bathing in the shower or tub.">
            <TaskRating>
                <Selection assistanceRating="Bathes self completely or needs help in bathing only a single part of the body such as the back, genital area or disabled extremity" score="1"/>
                <Selection assistanceRating="Need help with bathing more than one part of the body, getting in or out of the tub or shower. Requires total bathing " score="2"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Laundry() {
    return (
        <Li>
        <TaskTitle task="Laundry"/>
        <TaskExpand description="Helping the patient with their laundry.">
            <TaskRating>
                <Selection assistanceRating="Does personal laundry completely." score="1"/>
                <Selection assistanceRating="Launders small items-rinses stockings, etc." score="2"/>
                <Selection assistanceRating="All laundry must be done by others." score="3"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Dressing() {
    return (
        <Li>
        <TaskTitle task="Dressing"/>
        <TaskExpand description="Helping the patient to get dressed.">
            <TaskRating>
                <Selection assistanceRating="Get clothes from closets and drawers and puts on clothes and outer garments complete with fasteners. May have help tying shoes." score="1"/>
                <Selection assistanceRating="Needs help with dressing self or needs to be completely dressed." score="2"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Housekeeping() {
    return (
        <Li>
        <TaskTitle task="Housekeeping"/>
        <TaskExpand description="Cleaning around the home.">
            <TaskRating>
                <Selection assistanceRating="Maintains house alone or with occasional assistance." score="1"/>
                <Selection assistanceRating="Performs light daily tasks such as dish washing, bed making." score="2"/>
                <Selection assistanceRating="Performs light daily tasks but cannot maintain acceptable level of cleanliness." score="3"/>
                <Selection assistanceRating="Needs help with all home maintenance tasks." score="4"/>
                <Selection assistanceRating="Does not participate in any housekeeping tasks." score="5"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Mobility() {
    return (
        <Li>
        <TaskTitle task="Mobility"/>
        <TaskExpand description="Helping the patient with their mobility around the house or other areas.">
            <TaskRating>
                <Selection assistanceRating="Moves in and out of bed or chair unassisted. Mechanical transfer aids are acceptable " score="1"/>
                <Selection assistanceRating="Needs help in moving from bed to chair or requires a complete transfer. " score="2"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Transportation() {
    return (
        <Li>
        <TaskTitle task="Transportation"/>
        <TaskExpand description="Assisting the patient in their travels outside the house. ">
            <TaskRating>
                <Selection assistanceRating="Travels independently on public transportation or drives own car" score="1"/>
                <Selection assistanceRating="Arranges own travel via taxi, but does not otherwise use public transportation" score="2"/>
                <Selection assistanceRating="Travels on public transportation when accompanied by another" score="3"/>
                <Selection assistanceRating="Travel limited to taxi or automobile with assistance of another" score="4"/>
                <Selection assistanceRating="Does not travel at all" score="5"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function Shopping() {
    return (
        <Li>
        <TaskTitle task="Shopping"/>
        <TaskExpand description="Helping the patient with shopping for essentials. ">
            <TaskRating>
                <Selection assistanceRating="Takes care of all shopping needs independently" score="1"/>
                <Selection assistanceRating="Shops independently for small purchases" score="2"/>
                <Selection assistanceRating="Needs to be accompanied on any shopping" score="3"/>
                <Selection assistanceRating="Completely unable to shop" score="4"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}

export function MediaTech() {
    return (
        <Li>
        <TaskTitle task="Media technology"/>
        <TaskExpand description="Helping with technology media devices such as TV, laptop, tablet, mobile phone, etc.">
            <TaskRating>
                <Selection assistanceRating="Operates media devices on own initiative" score="1"/>
                <Selection assistanceRating="Operates media devices but not with as much independence" score="2"/>
                <Selection assistanceRating="Only uses media devices when encouraged and helped by others" score="3"/>
                <Selection assistanceRating="Does not use media devices at all" score="4"/>
            </TaskRating>
        </TaskExpand>     
        </Li>
    );
}