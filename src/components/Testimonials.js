import React from 'react'
import "./Testimonials.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import First from "../assets/First.jpeg";
import Second from "../assets/Second.jpg";
import Third from "../assets/Third.jpg";


const Testimonials = () => {

    const data = [
        {
          name:"Saniyan Sakadan",
          role:"Gangster, Shivkashi",
          description: "It is a long established fact that a reader will be distracted. by the readable content of a page. However, technical analysis owes heavily to Charles Dow, ",
          urls: First,
        },
        {
          name:"Joey Sakadan",
          role:"Actor, Worli",
          description: "Contrary to popular belief, Candlestick patterns date back to Japanese merchants eager to detect trading patterns for their rice harvests.",
          urls: Second,
        },
        {
          name:"Harry Sakadan",
          role:"Dealer, Teaxs",
          description: "There are many variations of passages of Lorem Ipsum available. The most common technical indicators are moving averages, which smooth price data to help make it easier to spot trends.  ",
          urls: Third,
        },
        
        
      ];
    const settings = {
        dots: true,
        slidesToShow: 1,
       
      };

  return (
    <div className="container">
    <h2>What our Clients say</h2>
    <h3>Choose us and have the best car service</h3>
    <Slider {...settings}>
      
    {data.map((slide) =>(
        <div>
        <div className="slide-content">
            <div className="test-image">
                <img src={slide.urls} alt="" />
            </div>
            <h3>{slide.name}</h3>
            <h4>{slide.role}</h4>
            <p>{slide.description}</p>
        </div>
    </div>
    ))}


    </Slider>
    <button className="explore">Explore our offerings</button>
  </div>
  )
}

export default Testimonials