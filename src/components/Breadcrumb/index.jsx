import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/home_icon.png";

const Breadcrumb = ({ steps }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-[#191932]">
      <div className="text-sm breadcrumbs">
        <ul className="flex items-end">
          {steps.map((step, index) => (
            <li key={index}>
              {step.link ? (
                <Link
                  className="font-poppins font-semibold text-[14px] flex items-center leading-[95%]"
                  to={step.link}
                >
                  {index === 0 && (
                    <img
                      src={homeIcon}
                      className="mr-[4px] mb-1 w-[18px] h-auto flex"
                      alt="Home"
                    />
                  )}
                  {step.text}
                </Link>
              ) : (
                <span className="inline-flex gap-2 items-center font-semibold text-[14px] leading-[95%]">
                  {step.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
