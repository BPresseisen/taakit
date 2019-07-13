import React from './node_modules/react';

export function Slim(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 offset-l3">
                    {props.children}
                </div>
            </div>
        </div>
    );
}





