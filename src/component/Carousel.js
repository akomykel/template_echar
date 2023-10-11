import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const imageData = [
  {
    label:"Image 1",
    alt:"image1",
    url:"./slide1.jpg"
  },
  {
    label:"Image 2",
    alt:"image2",
    url:"./slide2.jpg"
  },
  {
    label:"Image 3",
    alt:"image3",
    url:"./slide3.jpg"
  },
  {
    label:"Image 4",
    alt:"image4",
    url:"./slide4.jpg"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt} className="image-slider-container mx-auto d-block">
    <img src={image.url} alt={image.alt} className="d-block mx-lg-auto img-fluid" />
  </div>
));

const SliderWithCaption = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      showIndicators={true}
      autoPlay={true}
      dynamicHeight={false}
      infiniteLoop={true}
      className="carousel-container"
    >
      {renderSlides}
    </Carousel>
  );
}
 
export { SliderWithCaption };