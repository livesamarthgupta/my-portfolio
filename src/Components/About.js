import React from "react";

import "./About.css";
import Data from "../data/about.json"

const listCreator = (items) => {
  return items.map(item => (
    <li className="item">{item}</li>
  ))
}

const timelineCreator = (experiences) => {
  const exp = experiences.map(exp => (
    <li>
      <h5>{exp.title}</h5>
      <a target="_blank" rel="noopener noreferrer" href={exp.link}>
        {exp.role}
      </a>
      <p className="float-right text-primary">{exp.duration}</p>
      <ul className="ui bulleted list">
        {listCreator(exp.work)}
      </ul>
    </li>
  ))

  return (
    <ul className="timeline">
      {exp}
    </ul>
  )
}

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>{Data.title}</h4>
          {timelineCreator(Data.experience)}
        </div>
      </div>
    </div>
  );
};

export default About;
