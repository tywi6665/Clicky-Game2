import React from "react";
import "animate.css/animate.min.css";
import "./Card.css";

const Card = props => (
    <div className="card animated flash" value={props.id} onClick={() => props.handleClick(props.id)}>
        <img className="img" src={props.image} alt={props.id}/>
    </div>
);

export default Card;