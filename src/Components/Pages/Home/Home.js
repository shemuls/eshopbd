import React from "react";
import { homeSlides } from "../../../FakeData/FakeData.js";
import CarouselSlide from "../../CarouselSlide/CarouselSlide.js";

const Home = () => {
  return (
    <>
      <section className="homeTopHeroArea">
        <CarouselSlide slideData={homeSlides} />
      </section>
    </>
  );
};

export default Home;
