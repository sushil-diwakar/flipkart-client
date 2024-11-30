import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/iphone.jpg" className="d-block w-100" alt="iPhone" />
        </div>
        <div className="carousel-item">
          <img src="/zeb.jpg" className="d-block w-100" alt="Zebronics" />
        </div>
        <div className="carousel-item">
          <img src="/plane.jpg" className="d-block w-100" alt="Plane" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
