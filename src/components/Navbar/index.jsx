import { AiOutlineMenu } from 'react-icons/ai'; /* Importing an icon from React */

/* Importing Navlink to route to the homepage from the MovieDetailsPage*/
import {
    NavLink
} from "react-router-dom";

import "./styles.css"

export const Navbar = () => {

    const style = { color: "white", fontSize: "1.5em" } /*Creating a style to change the colour of the React icon*/

     /* Making the navigation bar component from buttons, links, and icons*/

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="menu">
                </li>
                <li>
                    <NavLink className="homeButton" exact={true} activeClassName="nav-selected" to="/">Home</NavLink>
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