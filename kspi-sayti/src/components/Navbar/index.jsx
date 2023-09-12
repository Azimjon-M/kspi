import React from "react";
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    return (
        <div className="absolute top-[40px] md:top-[50px] left-0 w-full z-10 bg-[#000000] px-4">
            <div className=" text-white flex justify-between items-center">
                <NavLink className={`${isActive => isActive ? 'active' : ''} flex items-center w-[230px] gap-x-4 font-bold text-[1.1rem] leading-[25px]`} to="/">
                    <span className="w-[70px] h-[42px]">
                        <img className="w-full h-full" src="https://kspi.uz/wp-content/uploads/2022/09/logo.png" alt="QDPI" />
                    </span>
                    Qo'qon davlat pedagogika instituti
                </NavLink>
                <ul className="md:flex justify-end gap-x-2 flex-wrap hidden">
                    <li className="">
                        INSTITUT
                    </li>
                    <li>
                        FAOLIYAT
                    </li>
                    <li>
                        TUZILMA
                    </li>
                    <li>
                        YANGILIKLAR
                    </li>
                    <li>
                        TALABALAR
                    </li>
                    <li>
                        ABITURIENT
                    </li>
                    <li>
                        INTERAKTIV XIZMATLAR
                    </li>
                </ul>
                <div className="md:hidden">
                    <AiOutlineMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
