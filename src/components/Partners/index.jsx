import React, { useEffect, useState } from "react";
// import TextTranslate from "../TextTranslate";
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
    <div className="mx-auto lg:py-8 xl:py-16 bg-[#5f4fa1]">
      <div>
        <Marquee>
          <MarqueeGroup>
            {data &&
              data.map((item, idx) => (
                <ImageGroup key={idx}>
                  <a href={item?.hamkor_url}>
                    <Image src={item?.hamkor_rasm} />
                  </a>
                </ImageGroup>
              ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data &&
              data.map((item, idx) => (
                <ImageGroup key={idx}>
                  <a href={item?.hamkor_url}>
                    <Image src={item?.hamkor_rasm} />
                  </a>
                </ImageGroup>
              ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {data &&
              data.map((item, idx) => (
                <ImageGroup key={idx}>
                  <a href={item?.hamkor_url}>
                    <Image src={item?.hamkor_rasm} />
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
  white-space: nowrap;
  gap: 80px;
  width: 100%;

  @media (max-width: 1400px) {
    width: 110%;
    gap: 70px;
    margin-right: 70px;
  }

  @media (max-width: 1024px) {
    width: 150%;
    gap: 60px;
    margin-right: 60px;
  }

  @media (max-width: 767px) {
    width: 180%;
    gap: 40px;
    margin-right: 40px;
  }

  @media (max-width: 467px) {
    width: 200%;
    gap: 10px;
    margin-right: 10px;
  }

  animation: ${scrollX} 15s linear infinite;
`;
const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: auto;
`;

const Image = styled.img`
  object-fit: contain;
  width: auto;
  height: 125px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0;
`;
