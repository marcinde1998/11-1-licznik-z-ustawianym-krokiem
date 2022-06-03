import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';

import Step from './Step'

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            stepValue: this.props.initStepValue,
        };

    }
    
    stepChange = (event) => {

        this.setState({
            stepValue: Math.floor(event.target.value)
        })
        
    }
    
    changeValue = (action) => { // ES6 method

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            let currentStepValue = prevState.stepValue;
            
            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
                currentStepValue = prevProps.initStepValue;


            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue,
                stepValue: currentStepValue
            });
        });
    }

    render() {

        return (
            <div className="counter">
                <strong>Licznik:</strong>
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} changeValueInput={this.state.stepValue}/>
                <Step stepMethod={this.stepChange} changeValueInput={this.state.stepValue}/>
                
            </div>
        );
    }
}

export default Counter;

// import React, { Component } from 'react';
// import ButtonsPanel from './ButtonsPanel';
// import './Counter.css';


// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counterValue: 0,
//         }
//     }

//     changeValue = () => {
//         this.setState((prevState) => {
//             return ({
//                 counterValue: prevState.counterValue + 1,
//             })
//         });

//     }

//     reInitValue = () =>{
//         this.setState(() => {
//             return ({
//                 counterValue: 108,
//             })
//         });
//     }

//     resetValue = () => {
//         this.setState(() => {
//             return ({
//                 counterValue: 0,
//             })

//         });
//     }

//     render() {
//         return (<div class="container">
//             <h2>Licznik: {this.state.counterValue}</h2>
//             <ButtonsPanel buttonMethod={this.changeValue} buttonReset={this.resetValue} buttonReinit={this.reInitValue} />

//         </div>);
//     }
// }






// export default Counter;