import React from 'react';
import './ButtonsPanel.css';
  
function ButtonsPanel(props) {
  
    return(
     <div className="buttons-panel">
        <button onClick={() => {props.buttonMethod('add');}}>Add {props.changeValueInput}</button>
        <button onClick={() => {props.buttonMethod('reinit');}}>ReInit</button>
        <button onClick={() => {props.buttonMethod('reset');}}>Reset</button>   
     </div>
   );   
}
  
export default ButtonsPanel;


// import React from 'react';
// import './ButtonsPanel.css';
// function ButtonsPanel(props) {
//     return(
//         <div className='buttons-panel'>
//             <button onClick={props.buttonMethod}>Add1</button>
//             <button onClick={props.buttonReinit}>Reinit</button>
//             <button onClick={props.buttonReset}>Reset</button>
//         </div>
//     )
// }

// export default ButtonsPanel;