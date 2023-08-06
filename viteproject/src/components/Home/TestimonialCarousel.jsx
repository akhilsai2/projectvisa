import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "CEO, Company A",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    {
      id: 3,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    {
      id: 4,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    {
      id: 5,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    {
      id: 6,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    {
      id: 7,
      name: "Jane Smith",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      designation: "CTO, Company B",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  return (
    // <div style={{width:"100%"}}>

    <div className="testimonial-slider" style={{width:"100%" ,backgroundColor:"black", textAlign: "center",padding:'30px' }}>
      <Slider {...settings}>
        {testimonials.map((testimonial,idx) => (
          // <div key={testimonial.id} className="testimonial-item">
          //   <p>{testimonial.text}</p>
          //   <div className="testimonial-info">
          //     <h4>{testimonial.name}</h4>
          //     <span>{testimonial.designation}</span>
          //   </div>
          // </div>
          <figure className="snip1192" key={idx}>
            <blockquote>{testimonial.text}</blockquote>
            <div className="author">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                alt="sq-sample1"
              />
              <h5>
                {testimonial.name} <span> {testimonial.designation}</span>
              </h5>
            </div>
          </figure>
        ))}
      </Slider>
    </div>
    // </div>

  );
};

export default TestimonialCarousel;
