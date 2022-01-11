import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselSlide.css";

const CarouselSlide = ({ slideData }) => {
  return (
    <>
      {Array.isArray(slideData) ? (
        <Carousel className="sCarouselArea">
          {slideData.map((slide) => (
            <Carousel.Item key={"CarouselItem_" + slide?.id}>
              <img
                className="d-block sCarouselItem_Image w-100"
                src={slide?.img}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="sCarouselContentWrap">
                  <h2 className="sCarouselCaption_Heading">{slide?.title}</h2>
                  <h3 className="sCarouselCaption_subHeading">
                    {slide.subTitle}
                  </h3>
                  <p className="sCarouselCaption_desc">{slide?.description}</p>
                  <button className="sCarouselCaption_btn btn btn-secondary btn-lg rounded-0 textMedium font-18 mt-4">
                    ORDER NOW
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="p-5">
          <p className="alert alert-danger">Carousel data must be a array</p>
        </div>
      )}
    </>
  );
};

export default CarouselSlide;
