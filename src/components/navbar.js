import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navAssets";
 
function NavComp() {
    return (
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>Home</NavLink>
                <NavLink to="/about" activeStyle>About Me</NavLink>
                <NavLink to="/contact" activeStyle>Contact Me</NavLink>
            </NavMenu>
        </Nav>
    );
}

export default NavComp;
