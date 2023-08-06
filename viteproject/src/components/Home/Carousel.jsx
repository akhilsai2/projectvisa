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
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzQ4Mi1tay02MTUwXzEuanBn.jpg"
              className="d-block w-100 colorImg"
              alt="Motorbike Smoke"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay02MS1qai0wNzIzOC5qcGc.jpg"
              className="d-block w-100 colorImg"
              alt="Mountaintop"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvay02MS1sZWFybmluZy5qcGc.jpg"
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
