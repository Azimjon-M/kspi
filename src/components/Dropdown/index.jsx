import { useState, useRef } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa"; // Ikonka uchun

const Dropdown = ({
    id,
    name,
    children,
    isNested = false,
    direction = "right",
    classForName = "",
    classForAllChild = ""
}) => {
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
            className={`relative ${!isNested && "inline-block"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Trigger elementi */}
            <div className={`min-w-[130px] flex items-center cursor-pointer`}>
                {isNested ? (
                    <div className="w-full flex items-center justify-between">
                        <span className={`text-black line-clamp-1 leading-7 ${classForAllChild}`}>
                            {name}
                        </span>
                        <FaAngleRight
                            className={`transition-transform duration-200 ${
                                isOpen ? "rotate-90" : ""
                            }`}
                        />
                    </div>
                ) : (
                    <span className="btn btn-sm btn-ghost">
                        <span className={classForName}>
                            {name}
                        </span>
                        <FaAngleDown
                            className={`transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </span>
                )}
            </div>

            {/* Dropdown menyusi */}
            <div
                className={`absolute z-10 rounded-lg shadow-lg bg-base-100 transition-all duration-200 ${
                    isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-[-8px]"
                } ${
                    isNested
                        ? direction === "left"
                            ? "right-full top-0 mr-2 w-52" // Child dropdown uchun kenglik qo‘shildi
                            : "left-full top-0 ml-2 w-52" // Child dropdown uchun kenglik qo‘shildi
                        : "mt-2 w-44 right-0"
                }`}
            >
                <ul className="menu p-2">{children}</ul>
            </div>
        </div>
    );
};

export default Dropdown;
