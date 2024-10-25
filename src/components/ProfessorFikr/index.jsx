// KeenSlider va Tailwind CSS import qilinadi
import React, { useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const ProfessorFikr = () => {
  const sliderRef = useRef(null);

  React.useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });

      return () => slider.destroy();
    }
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Don't just take our word for it...</h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!
          </p>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide p-6 bg-white shadow-lg rounded-lg">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-0.5 text-green-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-2xl font-bold text-rose-600">Stayin' Alive</p>
                <p className="mt-4 text-gray-700">No, Rose, they are not breathing. And they have no arms or legs … Where are they?</p>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700">&mdash; Michael Scott</footer>
            </blockquote>
          </div>

          <div className="keen-slider__slide p-6 bg-white shadow-lg rounded-lg">
            <blockquote className="flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-0.5 text-green-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-2xl font-bold text-rose-600">Best Decision Ever</p>
                <p className="mt-4 text-gray-700">This experience changed my life, highly recommended!</p>
              </div>
              <footer className="mt-4 text-sm font-medium text-gray-700">&mdash; Jim Halpert</footer>
            </blockquote>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => sliderRef.current && sliderRef.current.prev()}
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => sliderRef.current && sliderRef.current.next()}
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfessorFikr;