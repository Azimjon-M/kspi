import React from "react";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";

const Card = ({
  lavozim,
  rasm,
  fish,
  unvon,
  qabul,
  tel,
  email,
  telegram,
  instagram,
  facebook,
  youtube,
}) => {
  return (
    <div className="p-7 shadow-lg max-w-[436px]">
      <h2 className="font-semibold font-poppins leading-[1.16] text-lg mb-[18px]">
        {lavozim}
      </h2>
      {/* <img src={rasm} className="mb-[18px]" alt={`${lavozim} rasmi`} /> */}
      <img src="https://img.freepik.com/free-photo/young-man-shirt-showing-thumbs-up-looking-pleased-front-view_176474-15005.jpg" className="mb-[18px] w-full" alt={`${lavozim} rasmi`} />
      <p className="font-poppins font-semibold text-center mb-2.5 text-lg">{fish}</p>
      <p className="font-poppins font-semibold text-center text-[#cecece] mb-2.5">{unvon}</p>
      <p className="font-poppins font-semibold text-center text-[#cecece] mb-2.5">{qabul}</p>
      <div className="flex justify-center gap-2">
        {telegram && (
          <a
            href={telegram}
            className="w-[31px] h-[31px] bg-[#afafaf] flex items-center justify-center rounded-full text-white p-[6px] tooltip tooltip-bottom"
            data-tip="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaTelegram className="w-full h-auto" />
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="w-[31px] h-[31px] bg-[#afafaf] flex items-center justify-center rounded-full text-white p-[6px] tooltip tooltip-bottom"
            data-tip="Email"
          >
            <MdOutlineEmail className="w-full h-auto" />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            className="w-[31px] h-[31px] bg-[#afafaf] flex items-center justify-center rounded-full text-white p-[6px] tooltip tooltip-bottom"
            data-tip="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-full h-auto" />
          </a>
        )}
        {facebook && (
          <a
            href={facebook}
            className="w-[31px] h-[31px] bg-[#afafaf] flex items-center justify-center rounded-full text-white p-[6px] tooltip tooltip-bottom"
            data-tip="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiFacebook className="w-full h-auto" />
          </a>
        )}
        {youtube && (
          <a
            href={youtube}
            className="w-[31px] h-[31px] bg-[#afafaf] flex items-center justify-center rounded-full text-white p-[6px] tooltip tooltip-bottom"
            data-tip="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiYoutubeLine className="w-full h-auto" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
