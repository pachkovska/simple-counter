import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import './App.css';
import IncrementButton from "./components/IncrementButton";
import ValueInput from "./components/ValueInput";


function App() {

    const [number, setNumber] = useState(0);

    const [values, setValue] = useState({});

    const [error, setErrorState] = useState({
        errorState: false,
        errorText: '',
    });

    const handleValueChange = (name, value) => {
        if (((value < 0 || value > 20) || isNaN(value)) && value !== '') {
            alert('Sorry non-integers or numbers outside of advised range are not allowed') && setValue({...values, [name]: ''});
        } else {
            setValue({...values, [name]: +value});
        }
    }

    const incrementNumber = (n) => {
        setNumber(number + n);
    }

    useEffect(() => {
        if (values.fromValue > values.toValue && values.fromValue !== 0 && values.toValue !== 0) {
            setErrorState({
                errorState: true,
                errorText: 'Sorry,  begin incrementing value can not be bigger than end incrementing value.',
            });
        } else {
            setErrorState({
                errorState: false,
                errorText: '',
            });
        }
    }, [values]);


    return (
        <div className="App">
            <div className="App-content">
                <div className="App-header">Please enter numbers from 1 to 20</div>
                <ValueInput
                    title="Begin incrementing at: "
                    onChange={(ev) => handleValueChange('fromValue', ev.target.value)}
                    name="fromValue"
                    className="valueInput-from"
                    value={values.fromValue || ''}
                />
                <ValueInput
                    title="End incrementing at: "
                    onChange={(ev) => handleValueChange('toValue', ev.target.value)}
                    name="toValue"
                    className="valueInput-to"
                    value={values.toValue || ''}
                />
                <div className="number">
                    {number}
                </div>
                {error.errorState
                    ? <div className="errorMessage">{error.errorText}</div>
                    : values.fromValue && values.toValue
                        ? <>
                            <div className="incrementButtons">
                                {
                                    _.range(values.fromValue, values.toValue + 1, 1).map(el => (
                                        <IncrementButton key={el} step={el}
                                                         incrementNumber={() => incrementNumber(el)}/>
                                    ))
                                }
                            </div>
                            <div className="decrementButtons">
                                {
                                    _.range(values.fromValue, values.toValue + 1, 1).map(el => (
                                        <IncrementButton key={el} step={-el}
                                                         incrementNumber={() => incrementNumber(-el)}/>
                                    ))
                                }
                            </div>
                        </> : null
                }
            </div>
        </div>
    );
}

export default App;