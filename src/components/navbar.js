import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    //NavBtn,
    //NavBtnLink,
} from "./navAssets";
 
function NavComp() {
    return (
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/projects">My Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
            </NavMenu>
        </Nav>
    );
}

export default NavComp;
