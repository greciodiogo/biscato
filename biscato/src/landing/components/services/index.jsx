import React, { useRef } from "react";
import "./styles.css";
import Card from "../cards";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="about">
      <div className="about__content">
        <h1>Porquê a biscato?</h1>
        <p className="p__type">
          Lorem Ipsum dolor indolor Lorem Ipsum dolor indolor Lorem Ipsum dolor
          indolor Lorem Ipsum dolor indolor Lorem Ipsum dolor indolor Lorem
          Ipsum dolor indolor
        </p>
      </div>
      <div className="about__showcards">
        <div className="about__cards-container" ref={scrollRef}>
          <Card  />
          {/* <Card title="Publicar Projecto" />
          <Card title="Publicar Projecto" />
          <Card title="Publicar Projecto" />
          <Card title="Publicar Projecto" /> */}
        </div>
        <div className="about__cards-buttons">
          <BsArrowLeftShort className="arrow-icon" onClick={() => scroll('left')}/>
          <BsArrowRightShort className="arrow-icon" onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
