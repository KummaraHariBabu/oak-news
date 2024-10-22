import React, { useState } from "react";
import "./Slider.scss";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ sliderNews }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderNews.length;

  //fun for next slide
  const newxtSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  //fun for previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderNews) || length <= 0) {
    return null;
  }
  return (
    <div className="slider ">
      <FaArrowAltCircleLeft className="slides left" onClick={prevSlide} />
      <FaArrowAltCircleRight className="slides right" onClick={newxtSlide} />
      {sliderNews.map((item, index) => {
        return (
          <div key={index} className="slider-container">
            {index === current && (
              <div>
                <img src={item.urlToImage} alt="item" className="image" />

                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <a
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                  className="link"
                >
                  Detail
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
