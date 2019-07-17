import React from 'react';

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

export function Med(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m10 offset-m1  l8 offset-l2">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

