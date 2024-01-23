import React from "react";
import './display.css'

const Display = (props) =>{
return (
    <div className="display">
        <h2>{props.name}</h2>
    </div>
)
}

export default Display  