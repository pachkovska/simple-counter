import React from "react";


function ValueInput(props) {
    function handleChange(ev) {
        props.onChange(ev)
    }
    return (
        <div className={props.className}>
            <div className="valueInput-title">{props.title}</div>
            <input type="text" name={props.name} onChange={handleChange}></input>
        </div>
    )
}

export default ValueInput;