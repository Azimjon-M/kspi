import React from "react";

import mainVid from "../../assets/images/ttjhome.jpg";

function TTJBackground() {

  return (
    <div>
      {/* image about the institute */}
      <div className="relative">
        <img src={mainVid} alt="TTJ home img" className="h-[50vh] md:h-[80vh] lg:h-[100vh] object-cover object-center w-full -z-1"/>
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-zinc-900 opacity-35"></div>
      </div>
    </div>
  );
}

export default TTJBackground;
