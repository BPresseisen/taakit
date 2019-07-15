import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";


class Contact extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    
                        CONTACT PAGE GOES HERE A LA THREE COURSE TRAVEL<br/>
                       
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact