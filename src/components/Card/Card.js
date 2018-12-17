import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
        <img className="img" src={props.image} alt={props.id}/>
    </div>
);

export default Card;