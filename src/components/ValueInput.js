import React from "react";


function ValueInput(props) {
    function handleChange(ev) {
        props.onChange(ev)
    }
    return (
        <div className={props.className}>
            <div className="valueInput-title">{props.title}</div>
            <input type="text" name={props.name} value={props.value} onChange={handleChange} placeholder={0}></input>
        </div>
    )
}

export default ValueInput;