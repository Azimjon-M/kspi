import React, {useEffect, useState} from "react";
import TextTranslate from "../TextTranslate";
import styled, { keyframes } from "styled-components";
import APIHamkor from "../../services/hamkorlar";

function Partners() {
  const [data, setData] = useState(null);

  const getData = () => {
    APIHamkor.get()
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-8xl mx-auto py-10 bg-slate-100">
      <h1 className="text-xl lg:text-4xl font-bold text-[#004269] text-center">
        <TextTranslate id="hamkorlarimizTitle"/>
      </h1>
      <div>
        <Marquee>
          <MarqueeGroup>
            {data && data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item?.hamkor_url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item?.hamkor_rasm}
                  />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data && data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item?.hamkor_url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item?.hamkor_rasm}
                  />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data && data.map((item, idx) => (
              <ImageGroup className="w-[100px]" key={idx}>
                <a href={item?.hamkor_url}>
                  <Image
                    className="w-[100px] h-[100px] bg-white"
                    src={item?.hamkor_rasm}
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
