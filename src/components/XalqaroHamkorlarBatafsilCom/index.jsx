import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import rasm1 from "../../assets/images/abiturient.jpg";

const animation = { duration: 20000, easing: (t) => t };

const Carousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img src={rasm1} alt="Carousel Slide" className="carousel-image" />
      </div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};

function XalqaroHamkorlarBatafsilCom() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <Carousel />
      </div>
      <div>
        <h1>University of Cambrage</h1>
      </div>
    </div>
  );
}

export default XalqaroHamkorlarBatafsilCom;
