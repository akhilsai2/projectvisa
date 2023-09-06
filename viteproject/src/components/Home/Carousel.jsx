import carouselImg1 from "./carouselAssets/carouselImg1.jpg";
import carouselImg2 from "./carouselAssets/carouselImg2.jpg";
import carouselImg3 from "./carouselAssets/carouselImg3.jpg";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carouselImg1}
              className="d-block w-100 colorImg"
              alt="Motorbike Smoke"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg2}
              className="d-block w-100 colorImg"
              alt="Mountaintop"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg3}
              className="d-block w-100 colorImg"
              alt="Woman Reading a Book"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
