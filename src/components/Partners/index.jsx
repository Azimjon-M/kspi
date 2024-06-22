import React from "react";
import TextTranslate from "../TextTranslate";
import styled, { keyframes } from "styled-components";
import hamkor1 from "../../assets/images/1.JPG";
import hamkor2 from "../../assets/images/1.JPG";
import hamkor3 from "../../assets/images/1.JPG";
import hamkor4 from "../../assets/images/1.JPG";
import hamkor5 from "../../assets/images/1.JPG";
import hamkor6 from "../../assets/images/1.JPG";
import hamkor7 from "../../assets/images/1.JPG";
import hamkor8 from "../../assets/images/1.JPG";

function Partners() {
  const data = [
    {
      image: hamkor1,
      url: "https://kpfu.ru/",
    },
    {
      image: hamkor2,
      url: "https://rsvpu.ru/",
    },
    {
      image: hamkor3,
      url: "https://kpfu.ru/elabuga",
    },
    {
      image: hamkor4,
      url: "https://bspu.ru/",
    },
    {
      image: hamkor5,
      url: "https://glazov.academica.ru/",
    },
    {
      image: hamkor6,
      url: "https://www.grsu.by/",
    },
    {
      image: hamkor7,
      url: "https://uzedu.uz/uz",
    },
    {
      image: hamkor8,
      url: "https://uzbmb.uz/",
    },
  ];
  return (
    <div className="max-w-8xl mx-auto py-10 bg-slate-100">
      <h1 className="text-xl lg:text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="hamkorlarimizTitle"/>
      </h1>
      <div>
        <Marquee>
          <MarqueeGroup>
            {data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item.url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item.image}
                  />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item.url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item.image}
                  />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item.url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item.image}
                  />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </div>
    </div>
  );
}

export default Partners;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from{
    left:translateX(0);
  }
  to{
    transform: translateX(-100%);
  }`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 80%;

  @media (max-width: 1400px) {
    width: 110%;
  }

  @media (max-width: 1024px) {
    width: 150%;
  }

  @media (max-width: 767px) {
    width: 180%;
  }

  @media (max-width: 467px) {
    width: 220%;
  }

  animation: ${scrollX} 15s linear infinite;
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 15rem;
  aspect-ratio: 16/16;
  padding: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0;
`;
