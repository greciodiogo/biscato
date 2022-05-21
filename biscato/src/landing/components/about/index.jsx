import React from "react";
import "./styles.css";
import data from "../../../data.json";

const About = () => {
  return (
    <section className="services" id="about">
      <h1 className="heading">Com a biscato é possivel</h1>

      <div className="box-container">
        {data.map((item, index) => (
          <div className="box" key={index}>
            <i className="fas fa-utensils"></i>
            <h3>{item.tittle}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
