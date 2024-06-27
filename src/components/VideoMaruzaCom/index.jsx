import React, { useState, useEffect } from "react";
import APITuzilmaRectorat from "../../services/tFakultet";
import APIVideomaruza from "../../services/videomaruza";
import YouTube from "react-youtube";

const VideoMaruzalar = () => {
  const [data, setData] = useState([]);
  const [fakultet, setFakultet] = useState([]);

  // GET Fakultet
  const getFakultet = async () => {
    try {
      const res = await APITuzilmaRectorat.get();
      setFakultet(res.data);
    } catch (error) {
      console.error("Error fetching fakultet:", error);
    }
  };

  // GET Videomaruza
  const getData = async () => {
    try {
      const res = await APIVideomaruza.get();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching video maruzalar:", error);
    }
  };

  useEffect(() => {
    getFakultet();
    getData();
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // onReady event handling
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-center text-2xl my-5 font-bold">Video maruzalar</h2>
      <div className="p-5">
        {fakultet.map((faculty) => (
          <div
            className="collapse bg-base-200 mb-4 collapse-arrow shadow-md"
            key={faculty.id}
          >
            <input type="checkbox" name="faculty-accordion" />
            <div className="collapse-title text-xl font-medium">
              {faculty.name_uz}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 collapse-content">
              {data &&
                data
                  .filter((item) => item.fakultet_id === faculty.id)
                  .map((item) => (
                    <div key={item.id}>
                      <div className="p-2 relative pb-[56.25%] rounded overflow-hidden">
                        <YouTube
                          className="absolute top-0 left-0 w-full h-full"
                          videoId={item.link.split("/").pop()}
                          opts={opts}
                          onReady={onReady}
                        />
                      </div>
                      <div className="text-xl">{item.title}</div>
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
