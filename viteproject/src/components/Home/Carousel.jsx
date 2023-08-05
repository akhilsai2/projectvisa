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
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(10).webp"
              className="d-block w-100 colorImg"
              alt="Motorbike Smoke"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              className="d-block w-100 colorImg"
              alt="Mountaintop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(5).webp"
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
