import React, { useState } from 'react';


function IncrementButton(props) {

    const [isClicked, setIsClicked] = useState(false);

    const onButtonClick = () => {
        setIsClicked(!isClicked);
        props.incrementNumber();
    }

    return (
        <div className="IncrementButton">
            <div>
                <button onClick={onButtonClick}>{props.step}</button>
            </div>
        </div>
    );
}

export default IncrementButton;
