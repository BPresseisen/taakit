import React from "react";
import "./style.css";

export function DashboardContainer(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 offset-l3 center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}




 