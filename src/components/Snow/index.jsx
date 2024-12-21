import React from "react";
import "./style.css";

function Snow() {
  const snowflakes = new Array(50).fill(null); // 50 ta qor parchasi

  return (
    <div className="snow-container">
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`, // Gorizontal tasodifiy joylashuv
            animationDelay: `${Math.random() * 5}s`, // Tasodifiy kechikish
            fontSize: `${Math.random() * 1.5 + 1}rem`, // Tasodifiy o‘lcham
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}

export default Snow;
