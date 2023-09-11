import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="bg-black text-white">
                <NavLink className={`${isActive => isActive ? 'active' : ''}`} to="/">
                    <span>
                        <img src="www.google.com" alt="QDPI" />
                    </span>
                    Qo'qon davlat pedagogika insituti
                </NavLink>
                <ul className="flex gap-x-4">
                    <li>
                        <NavLink className={`${isActive => isActive ? 'active' : ''}`} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`${isActive => isActive ? 'active' : ''}`} to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
