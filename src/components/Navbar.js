import React  from 'react';
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">blog</NavLink>
                </li>
                <li>
                    <NavLink to="/blogDetails">blogdetails</NavLink>
                </li>
            </ul>
         </nav>
    )
}
export default Navbar