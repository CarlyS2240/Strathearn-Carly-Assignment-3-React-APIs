import { AiOutlineMenu } from 'react-icons/ai';

import {
    NavLink
} from "react-router-dom";

import "./styles.css"



export const Navbar = () => {

    const style = { color: "white", fontSize: "1.5em" }

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="menu">
                </li>
                <li>
                    <button className="homeButton" type="button">Home</button>
                </li>
                <li>
                    <button className="accountButton" type="button">My Account</button>
                </li>
                <li>
           
                </li>
                <AiOutlineMenu style={style}></AiOutlineMenu>
            </ul>
        </nav>
    )
}