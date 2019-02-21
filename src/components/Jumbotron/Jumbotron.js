import React, { Component } from "react";
import "./Jumbotron.css";

// const Jumbotron = () => (
//     <div className="jumbotron">
//         <div className="container">
//             <h1 className="display-4">Clicky Game</h1>
//             <p className="lead">It's time to get your click on!! Your task is simple, click on the pictures below, but be sure not click on the same picture twice!</p>
//             <p className="score">Score: {this.props.score}</p>
//         </div>
//     </div>
// );

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="wrapper">
                    <h1 className="display-4">Clicky Game</h1>
                    <p className="lead">It's time to get your click on!! Your task is simple, click on the pictures below, but be sure not click on the same picture twice!</p>
                    <h2 className="score">Score: {this.props.score}</h2>
                </div>
            </div>
        );
    };
};


export default Jumbotron;