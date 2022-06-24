import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="slider-content">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
         
          <h3 className="slide-text">{slide.description}</h3>
          
          <div className="slide-button">
          <h2 >Explore our offerings</h2>
          </div>
          
        </div>
      ))}
      
    </section>
  );
}

export default SliderContent;