import React from 'react';
import './Step.css'

function Step(props){
    return(
        <div>
            <p><strong>Krok: </strong>
            <input type="number" value={props.changeValueInput} onChange={(event) => props.stepMethod(event)}></input></p>
        </div>        
    )
}

export default Step;