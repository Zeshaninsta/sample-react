import React, { useState, useEffect } from "react";

import "./style.css";

function Header() {
  return (
    <div className="Header">
      <img src="./public/Screenshot_20230717-123236" alt="logo" />
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <a href=" "> home </a>
            </li>
            <li>
              <a href=" "> our products </a>
            </li>
            <li>
              <a href=" ">contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg"
];

const IMAGE_FADE_TIME = 5000; // 5 seconds

function BackgroundImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update the current image index every IMAGE_FADE_TIME milliseconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, IMAGE_FADE_TIME);

    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  const style = {
    backgroundImage: `url(${images[currentImageIndex]})`
  };

  return (
    <div className="background-image" style={style}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem</p>
    </div>
  );
}

export { Header, BackgroundImage };
