import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 85px;
    width: 100%;
    display: flex;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #FFFFFF;
        background-color:#999999;
    }
    &:hover {
        color: #FFFFFF;
        box-shadow: 0px 0px 6px #a6a6a6, 0px 0px 8px #808080, 0px 0px 10px #000000;

    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000000;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
/*
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;*/
/*
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #FFFFFF;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: solid; 
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #000000;
        color: #FFFFFF;
    }
`;*/