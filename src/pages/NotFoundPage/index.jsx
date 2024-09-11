import React from "react";
import { Link } from "react-router-dom";
import TextTranslate from "../../components/TextTranslate";

const NotFoundPage = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="text-center">
                <div>
                    <div className="text-[100px] md:text-[120px] xl:text-[180px] 2xl:text-[240px]">
                        404
                    </div>
                    <div className="text-[22px]">
                        <TextTranslate id={`notFoundPageTitle_1`} />
                    </div>
                    <Link
                        className="text-blue-500 underline fixed bottom-8 left-[50%] translate-x-[-50%]"
                        to="/"
                    >
                        <TextTranslate id={`notFoundPageTitle_2`} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
