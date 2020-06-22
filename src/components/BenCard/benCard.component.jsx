import React from "react";

const BenCard = (props) => {
    
    return (
        <div style = {{backgroundColor : props.color}} className = "benCard">
            <p className = "benCard--main">{props.mainText}</p>
            <p className = "benCard--tag">{props.tagLine}</p>
            <button style = {{color : props.color}} className = "benCard--btn">{props.btnText}</button>
        </div>
    )
}

export default BenCard;