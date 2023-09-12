import React from 'react';
import './style.css'

import { BsTelegram, BsFacebook, BsYoutube, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';

function Header() {
    return (
        <div className='h-[40px] md:h-[50px] flex justify-start xl:justify-center bg-[#012873] text-white style-overflow-x overflow-x-auto px-5 2xl:px-0' >
            <div className='flex gap-x-4 xl:gap-x-10 items-center 2xl:justify-between 2xl:w-[1620px]'>
                <ul className='flex font-semibold gap-x-4 xl:gap-x-10 whitespace-nowrap select-none'>
                    <li>
                        <a href="https://talaba.kspi.uz/dashboard/login" target="_blank" rel="noopener noreferrer">
                            HEMS TIZIMI
                        </a>
                    </li>
                    <li>
                        <a href="https://journal.kspi.uz" target="_blank" rel="noopener noreferrer">
                            Insitut jurnali
                        </a>
                    </li>
                    <li>
                        <a href="https://conferences.kspi.uz" target="_blank" rel="noopener noreferrer">
                            Konferensilar
                        </a>
                    </li>
                    <li>
                        <a href="https://ikkinchitalim.edu.uz" target="_blank" rel="noopener noreferrer">
                            Ikkinchi ta'lim
                        </a>
                    </li>
                    <li>
                        {/* Page of Myself */}
                        <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                            Ochiq ma'lumotlar
                        </a>
                    </li>
                </ul>
                <div className='flex gap-x-4 lg:gap-x-1 xl:gap-x-4 items-center'>
                    <span>
                        <a href="https://t.me/kspi_official" target="_blank" rel="noopener noreferrer">
                            <BsTelegram />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/kspi_uz" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram className='text-[1.2rem]' />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/kspi.uz.56" target="_blank" rel="noopener noreferrer">
                            <BsFacebook />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.youtube.com/channel/UC6ThR8cLnJmdWDGDz9PR85Q/featured" target="_blank" rel="noopener noreferrer">
                            <BsYoutube className='text-[1.2rem]' />
                        </a>
                    </span>
                    <span className='flex items-center'>
                            <HiMail className='text-[1.4rem] me-1' />
                            kspi_info@edu.uz
                    </span>
                    <span className='flex items-center'>
                            <BsFillTelephoneFill className='me-1' />
                            +9987354238
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;