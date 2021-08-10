import React from "react";
import {render} from "react-dom";

function FirstComponent() {
    return(
        <React.Fragment>
        <div>
            <h2>This is my First Component</h2>
            <img src="penguin.jpg" alt="the penguin should have been here but it isn't"
            width="500" height="320"></img>
        </div>
        </React.Fragment>
    )
}

export default FirstComponent