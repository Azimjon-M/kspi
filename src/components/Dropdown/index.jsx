import { useState, useRef } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa"; // Ikonka uchun

const Dropdown = ({ id, name, children, isNested = false, direction = "right" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    // Hover da ochish
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Oldingi kechikishni to‘xtatamiz
        }
        setIsOpen(true);
    };

    // Hover bekor qilinganda yopish
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200); // 200ms kechikish
    };

    return (
        <div
            className={`relative ${isNested ? "w-full" : "inline-block"} border border-[green]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger elementi */}
            <div
                className={`w-full flex items-center cursor-pointer border border-[blue] ${
                    isNested
                        && "justify-between"
                }`}
            >
                <span className={`${isNested ? "w-full flex justify-between items-center border border-[red]" : "btn btn-sm btn-ghost"}`}>
                    {name}
                    {isNested ? (
                        <FaAngleRight
                            className={`transition-transform duration-200 ${
                                isOpen ? "rotate-90" : ""
                            }`}
                        />
                    ) : (
                        <FaAngleDown
                            className={`transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    )}
                </span>
            </div>

            {/* Dropdown menyusi */}
            <div
                className={`absolute z-10 rounded-lg shadow-lg bg-base-100 transition-all duration-200 ${
                    isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-[-8px]"
                } ${isNested ? (direction === "left" ? "right-full top-0 mr-2" : "left-full top-0 ml-2") : "mt-2 w-44"}`}
            >
                <ul className="menu p-2">{children}</ul>
            </div>
        </div>
    );
};

export default Dropdown;
