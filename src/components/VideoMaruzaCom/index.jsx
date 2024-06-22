import React from "react";
import YouTube from "react-youtube";

const VideoMaruzalar = () => {
  const data = {
    "Fizika va matematika": [
      "https://youtu.be/xIgRht94pcM",
      "https://youtu.be/NNDhxZzmPeg",
      "https://youtu.be/sfSJwmtiRQg",
      "https://youtu.be/MlgzL27mUvM",
    ],
    "Xorijiy tillar": [
      "https://youtu.be/KtPSHvjojX4",
      "https://youtu.be/SPSsRVzO-i8",
      "https://youtu.be/DAemyjdCN3Y",
      "https://youtu.be/elp3E7qXiNc",
      "https://youtu.be/tBu7jnU0DTk",
      "https://youtu.be/v9DiaNXeCvk",
    ],
    "Pedagogika va psixologiya": [
      "https://youtu.be/P8AMHhwZnrs",
      "https://youtu.be/MXnqBXQiak0",
      "https://youtu.be/ks44WF4NgXQ",
      "https://youtu.be/IBJ4geLDh90",
      "https://youtu.be/NLr-t1uK44Q",
      "https://youtu.be/Y8Henp19zK4",
      "https://youtu.be/Bn-0csHnQw4",
      "https://youtu.be/_jdoK_zCy3w",
    ],
    "Tabiiy fanlar": [
      "https://youtu.be/gomwgFmUZMU",
      "https://youtu.be/o7iRm2HN82Y",
      "https://youtu.be/eo0qYad-pCc",
      "https://youtu.be/Adm31eK_t1g",
      "https://youtu.be/Ip39uHgI9FU",
    ],
    Tarix: ["https://youtu.be/YN_xAOYVZKs", "https://youtu.be/COUUUNolU6Y"],
    "O’zbek tili va adabiyot": [
      "https://youtu.be/GCumIWU9G7s",
      "https://youtu.be/IRE-RXXp9e8",
      "https://youtu.be/S_HXTMDm4ng",
    ],
    "San’at": [
      "https://youtu.be/X3QSMh2k_As",
      "https://youtu.be/6vvznfdULEo",
      "https://youtu.be/PbK6MsAJI94",
      "https://youtu.be/7h8JR9vWyMg",
      "https://youtu.be/9deKLtpRhvY",
      "https://youtu.be/pYRWs9F96uA",
      "https://youtu.be/7HzrZ4d_GLU",
      "https://youtu.be/wJowLI4aVkc",
      "https://youtu.be/haKxBFS6iHE",
      "https://youtu.be/5IlWPq4bnUk",
      "https://youtu.be/RsbbS7n5N_k",
    ],
    "Boshlang’ich ta’lim": [
      "https://youtu.be/3mWhyAo_NyY",
      "https://youtu.be/AgUVN5H3IQw",
      "https://youtu.be/oZc-uU3EhOU",
      "https://youtu.be/SMA9-01R6MA",
      "https://youtu.be/gDoxxExsfuQ",
      "https://youtu.be/T9WyVjjWte0",
      "https://youtu.be/ekjboXZGeAM",
      "https://youtu.be/tD86DMtOcO4",
      "https://www.youtube.com/watch?v=-RyvvM7C4-A",
    ],
    "Jismoniy tarbiya": ["https://youtu.be/9x0i1d9huVc"],
    "Maktabgacha ta’lim": [
      "https://youtu.be/iPQHKCfCYmI",
      "https://youtu.be/5J-C1u2matw",
      "https://youtu.be/ayerw7OP-qE",
      "https://youtu.be/lJrg9mwJTMw",
    ],
    "Rus tili va adabiyoti": [
      "https://youtu.be/VuY0WSi7EL4",
      "https://youtu.be/yxXzvB6WIt0",
      "https://youtu.be/mSS96EnFnNM",
      "https://youtu.be/5s3nD5eStc8",
      "https://youtu.be/CgsJHbVN2hQ",
      "https://youtu.be/Fa_lojbWiso",
      "https://youtu.be/Cp5MxxAikB0",
      "https://youtu.be/CPWU9DcW994",
      "https://youtu.be/CPWU9DcW994",
    ],
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // onReady hodisasi bo'lganida API chaqirishlarini bajaring
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-center text-2xl my-5 font-bold">Video maruzalar</h2>
      <div className="p-5">
        {Object.entries(data).map(([subject, videos]) => (
          <div
            className="collapse bg-base-200 mb-4 collapse-arrow shadow-md"
            key={subject}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">{subject}</div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 collapse-content">
              {videos.map((video, index) => (
                <div key={index}>
                  <div className="p-2 relative pb-[56.25%] rounded overflow-hidden">
                    <YouTube
                      className="absolute top-0 left-0 w-full h-full"
                      videoId={video.split("/").pop()}
                      opts={opts}
                      onReady={onReady}
                    />
                  </div>
                  <div className="text-xl">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoMaruzalar;
