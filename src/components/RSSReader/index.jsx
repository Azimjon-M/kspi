import React, { useState, useEffect } from "react";
import axios from "axios";

function RSSReader() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/rss-feed")
      .then((response) => {
        setFeedData(response.data);
      })
      .catch((error) => {
        console.error("Xatolik sodir bo`ldi:", error);
      });
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      <ul>
        {feedData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RSSReader;
