import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Welcome</NavLink>                
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/our-macarons">Our Macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/gift-parties">Party and Gifts</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact"className="nav-link">Contact Us</NavLink>
            </li>
        </ul>
    )
}