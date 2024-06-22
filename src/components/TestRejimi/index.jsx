import React from "react";
import Marquee from "react-fast-marquee";
import TextTranslate from "../TextTranslate/index";

const MarqueeCom = () => {
  return (
      <Marquee
        velocity={25}
        className="sticky top-0 left-0 mx-auto text-red-600 font-semibold italic w-full bg-slate-300"
      >
        <div className="text-lg text-center">
          <TextTranslate id="saytTestRejimida" />
        </div>
      </Marquee>
  );
};

export default MarqueeCom;
