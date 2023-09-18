import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';

import { DownUp } from "./styled";

import uz from '../../assets/icons/flag-uz.png';
import en from '../../assets/icons/flag-en.png';
import ru from '../../assets/icons/flag-ru.png';


function Navbar() {
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)
    const [isActive8, setIsActive8] = useState(false)
    const [isActive9, setIsActive9] = useState(false)
    const [isActive10, setIsActive10] = useState(false)

    const handleClickLi = (numb) => {
        switch (numb) {
            case 1:
                setIsActive1(isActive1 => !isActive1)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 2:
                setIsActive1(false)
                setIsActive2(isActive2 => !isActive2)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 3:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(isActive3 => !isActive3)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 4:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(isActive4 => !isActive4)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 5:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(isActive5 => !isActive5)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 6:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(isActive6 => !isActive6)
                setIsActive7(false)
                setIsActive10(false)
                break;
            case 7:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(isActive7 => !isActive7)
                setIsActive10(false)
                break;
                
            // SEARCH MENU
            case 8:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive8(isActive8 => !isActive8)
            break;
                
            // NAVBAR MENU
            case 9:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive8(false)
                setIsActive9(isActive9 => !isActive9)
                setIsActive10(false)
            break;
            case 10:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive8(false)
                setIsActive10(isActive10 => !isActive10)
                break;
            
            default:
                setIsActive1(false)
                setIsActive2(false)
                setIsActive3(false)
                setIsActive4(false)
                setIsActive5(false)
                setIsActive6(false)
                setIsActive7(false)
                setIsActive8(false)
                setIsActive9(false)
                setIsActive10(false)
                break;
        }
    }

    const data = [
        {
            id: 1,
            names: 'INSTITUT',
            isActives: isActive1,
            funksya: () => {handleClickLi(1)}
        },
        {
            id: 2,
            names: 'FAOLIYAT',
            isActives: isActive2,
            funksya: () => {handleClickLi(2)}
        },
        {
            id: 3,
            names: 'TUZILMA',
            isActives: isActive3,
            funksya: () => {handleClickLi(3)}
        },
        {
            id: 4,
            names: 'YANGILIKLAR',
            isActives: isActive4,
            funksya: () => {handleClickLi(4)}
        },
        {
            id: 5,
            names: 'TALABALAR',
            isActives: isActive5,
            funksya: () => {handleClickLi(5)}
        },
        {
            id: 6,
            names: 'ABITURIENT',
            isActives: isActive6,
            funksya: () => {handleClickLi(6)}
        },
        {
            id: 7,
            names: 'INTERAKTIV XIZMATLAR',
            isActives: isActive7,
            funksya: () => {handleClickLi(7)}
        },
    ]

    return (
        <div className="absolute top-[40px] md:top-[50px] left-0 w-full z-10 bg-[rbga(0, 0, 0, 0)] px-4 py-2 border border-red-600">
            <div className=" text-white flex justify-between items-center">
                <Link className={`${isActive => isActive ? 'active' : ''} flex items-center w-[220px] gap-x-4`} to="/">
                    <span className="w-[45px] h-[40px]">
                        <img className="w-full h-full" src="https://kspi.uz/wp-content/uploads/2022/09/logo.png" alt="QDPI" />
                    </span>
                    <p className="text-[16px font-bold leading-[20px]">
                        Qo'qon davlat pedagogika instituti
                    </p>
                </Link>
                <ul className="hidden lg:flex justify-end gap-x-2 items-center flex-wrap text-[14px] font-semibold select-none">

                    {
                        data.map( data => {
                            const color = data.isActives ? "red" : "white"
                            return (
                                <li key={data.id} className={`text-[${color}] flex items-center cursor-pointer`} onClick={data.funksya} >
                                    {data.names}
                                    <DownUp color={color} $totop={data.isActives} />
                                </li>
                            )
                        })
                    }
                    
                    <div className="flex items-center">
                        <div onClick={() => {handleClickLi(10)}}>
                            <span className="w-[50px!important] h-[30px!important]">
                                <img className="w-[30px!important] h-[30px!important]" src={uz} alt="uz" />
                            </span>
                            <span className="w-[50px!important] h-[30px!important] hidden">
                                <img className="w-[30px!important] h-[30px!important]" src={en} alt="en" />
                            </span>
                            <span className="w-[50px!important] h-[30px!important] hidden">
                                <img className="w-[30px!important] h-[30px!important]" src={ru} alt="ru" />
                            </span>
                        </div>
                        <DownUp color='white' $totop={isActive10} />
                    </div>
                    <li onClick={() => {handleClickLi(8)}} className="cursor-pointer p-[9px]">
                        <AiOutlineSearch className="text-[1.5rem]" />
                    </li>
                </ul>
                <div className="flex items-center lg:hidden">
                    <div className="p-[9px] cursor-pointer" onClick={() => {handleClickLi(8)}}>
                        <AiOutlineSearch className="text-[1.5rem]" />
                    </div>
                    <div className="p-[11px]" onClick={() => {handleClickLi(9)}}>
                        <SlMenu className="text-[1.2rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
