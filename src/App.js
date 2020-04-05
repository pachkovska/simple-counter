import React, {useState} from 'react';
import _ from 'lodash';
import './App.css';
import IncrementButton from "./components/IncrementButton";
import ValueInput from "./components/ValueInput";


function App() {

    const [number, setNumber] = useState(0);

    const [values, setValue] = useState({});

    const handleValueChange = (ev) => {
        const {name, value} = ev.target;
        if(((value < 0 || value > 20) || isNaN(value)) && value !== '') {
            alert('Please enter an integer from 1 to 20') && setValue({});
        } else if (name === 'toValue' && value < values.fromValue && value.length === 2) {
            alert('Sorry end incrementing value can not be smaller than begin incrementing value') && setValue({});
        } else if (name === 'fromValue' && values.toValue && value > values.toValue && value !== '') {
            alert('Sorry begin incrementing value can not be bigger than end incrementing value') && setValue({});
        } else {
            setValue({...values, [name]: +value});
        }
    }

    const incrementNumber = (n) => {
        setNumber(number + n);
    }

    return (
        <div className="App">
            <div className="App-content">
                <div className="App-header">Please enter numbers from 1 to 20</div>
                <ValueInput
                    title="Begin incrementing at: "
                    onChange={handleValueChange}
                    name="fromValue"
                    className="valueInput-from"
                    value={values.fromValue || ''}
                />
                <ValueInput
                    title="End incrementing at: "
                    onChange={handleValueChange}
                    name="toValue"
                    className="valueInput-to"
                    value={values.toValue || ''}
                />
                <div className="number">
                    {number}
                </div>
                <div className="incrementButtons">
                    {
                        values.fromValue && values.toValue ?
                        _.range(values.fromValue, values.toValue + 1, 1).map(el => (
                            <IncrementButton key={el} step={el} incrementNumber={() => incrementNumber(el)}/>
                        )) : null
                    }
                </div>
                <div className="decrementButtons">
                    {
                        values.fromValue && values.toValue ?
                        _.range(values.fromValue, values.toValue + 1, 1).map(el => (
                            <IncrementButton key={el} step={-el} incrementNumber={() => incrementNumber(-el)}/>
                        )) : null
                    }
                </div>
            </div>
        </div>
    );
}

export default App;

{/* Original version of input fields. In the current version Input is a separate component*/
}
{/*<div className="valueInput--from">*/
}
{/*    <div className="valueInput-title">Begin Incrementing at:</div>*/
}
{/*    <input type="text" name="fromValue" onChange={handleValueChange}></input>*/
}
{/*</div>*/
}
{/*<div className="valueInput--to">*/
}
{/*    <div className="valueInput-title">End Incrementing at:</div>*/
}
{/*    <input type="text" name="toValue" onChange={handleValueChange}></input>*/
}
{/*</div>*/
}