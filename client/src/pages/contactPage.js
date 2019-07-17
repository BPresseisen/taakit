import React, { Component } from 'react';
import { SeanM, BenP } from '../components/Team';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";


class Contact extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 center formTitle">
                        Our Team
                    </div>
                </div>

               <div className="row">
               <BenP/>
                <SeanM/>
               </div>

               <div className="row">
                    <div className="col s12 center formTitle">
                        Our Story
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Contact