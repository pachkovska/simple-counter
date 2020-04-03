import React, { useState } from 'react';
import _ from 'lodash';
import IncrementButton from "./components/IncrementButton";
import './App.css';
import ValueInput from "./components/ValueInput";


function App() {

    const [number, setNumber] = useState(0);

    const [values, setValue] = useState({});

    const handleValueChange = (ev) => {
        const {name, value} = ev.target;
        setValue({...values, [name]: +value});
    }

    const incrementNumber = (n) => {
        setNumber(number + n);
    }

    return (
        <div className="App">
            <div>Please enter </div>
            <ValueInput
                title="Begin incrementing at: "
                onChange={handleValueChange}
                name="fromValue"
                className="valueInput-from"
            />
            <ValueInput
                title="End incrementing at: "
                onChange={handleValueChange}
                name="toValue"
                className="valueInput-to"
            />
            <div className="number">
                {number}
            </div>
            <div className="incrementButtons">
                {
                    values.fromValue && values.toValue &&
                    _.range(values.fromValue, values.toValue + 1, 1).map(el => (
                        <IncrementButton key={el} step={el} incrementNumber={() => incrementNumber(el)}/>
                    ))
                }
            </div>
            <div className="decrementButtons">
                {
                    values.fromValue && values.toValue &&
                    _.range(values.fromValue, values.toValue + 1, 1).reverse().map(el => (
                        <IncrementButton key={el} step={-el} incrementNumber={() => incrementNumber(-el)}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;

{/* Original version of input fields. In the current version Input is separated as component*/}
{/*<div className="valueInput--from">*/}
{/*    <div className="valueInput-title">Begin Incrementing at:</div>*/}
{/*    <input type="text" name="fromValue" onChange={handleValueChange}></input>*/}
{/*</div>*/}
{/*<div className="valueInput--to">*/}
{/*    <div className="valueInput-title">End Incrementing at:</div>*/}
{/*    <input type="text" name="toValue" onChange={handleValueChange}></input>*/}
{/*</div>*/}