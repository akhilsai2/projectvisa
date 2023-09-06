import carouselImg1 from "./carouselAssets/carouselImg1.jpg";
import carouselImg2 from "./carouselAssets/carouselImg2.jpg";
import carouselImg3 from "./carouselAssets/carouselImg3.jpg";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item interval={1500}>
        <img
          src={carouselImg1}
          className="d-block w-100 colorImg"
          alt="Motorbike Smoke"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={carouselImg2}
          className="d-block w-100 colorImg"
          alt="Mountaintop"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          src={carouselImg3}
          className="d-block w-100 colorImg"
          alt="Woman Reading a Book"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselItem;
