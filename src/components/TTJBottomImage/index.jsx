import React from "react";
import ttjTalabalari from '../../assets/images/ttjxona.jpg'

function TTJBottomImage() {
  return (
    <div>
      {/* Image students  */}
      <div className="max-full my-20 md:mt-32">
        <img
          className="w-full max-h-[600px]"
          src={ttjTalabalari}
          alt="TTJ Talabalari"
        />
      </div>
    </div>
  );
}

export default TTJBottomImage;
