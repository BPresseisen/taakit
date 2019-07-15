import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";


class Summary extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    
                        SUMMARY GOES HERE SPECIFYING: <br></br>
                        
                        1. CHANGES BY TASK SINCE PRIOR SHIFT <br></br>

                        AND <br></br>
                        
                        2. TOTAL VITALS SCORE FOR CURRENT SHIFT vs PRIOR SHIFT <br></br>

                        AND <br></br>

                        3. ANY RELEVANT MEMOS FROM TASK OR VITALS<br></br>
                       
                    </div>
                </div>
            </div>
        )
    }
}
export default Summary