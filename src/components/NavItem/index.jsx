import React from "react";
import './index.css'
import { NavLink } from "react-router-dom";

const NavItem = ({details, updateActiveTab, isActive}) => {
    const {name, toLink, id} = details
    const onClickUpdateAct = () => {
        updateActiveTab(id)
    }
    return(
        <NavLink to={toLink} className='navLink-container' onClick={onClickUpdateAct}>
            <li className="navLink-item" style={
            {
                backgroundColor: isActive ? "#cdadf155": '',
                color: isActive ? '#9f60e6' : '#908f8f'
            }
        }>
                <h3>{name}</h3>
            </li>
        </NavLink>
    )
}

export default NavItem