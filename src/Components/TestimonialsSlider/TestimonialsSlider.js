import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-bootstrap";
import { ClientTestimonials } from "../../FakeData/FakeData.js";
import classes from "./TestimonialsSlider.module.css";

const TestimonialsSlider = () => {
  return (
    <div className={classes.sTestimoniSliderWrap}>
      <Carousel>
        {ClientTestimonials.map((testimonial, index) => (
          <Carousel.Item
            key={"testiSlide_" + index}
            className={classes.sTestimonialItem}
          >
            <Carousel.Caption className={classes.sTestimonialSlideCaption}>
              <p className={classes.sComment}>
                <FontAwesomeIcon icon={faQuoteLeft} />
                <span style={{ padding: "10px" }}>{testimonial.comment}</span>
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <img
                className={classes.sClientImage}
                src={testimonial.photo}
                alt=""
              />
              <h3 className={classes.sClientName}>{testimonial.name}</h3>
              <h6 className={classes.sJobTitle}>{testimonial.profession}</h6>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsSlider;
