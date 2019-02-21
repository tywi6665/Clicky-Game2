import React from "react";
import "./Header.css";

// class Header extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-default navbar-fixed-top">
//                 <ul>
//                     <li className="title">Clicky Game</li>
//                     <li className="name">Made by tywi6665</li>
//                 </ul>
//             </nav>
//         );
//     };
// };

const Header = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
            <li className="title">Clicky Game</li>
            <li className="name">Made by tywi6665</li>
        </ul>
    </nav>
);

export default Header;