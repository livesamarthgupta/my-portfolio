import React, { Component } from "react";
import "./Projects.css";
import Data from "../data/projects.json"

class Projects extends Component {

  cardGenerator = (items) => {
    return items.map(item => (
      <div className="card-container">
          <div className="card">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">{item.icon}</i>
                <h2>{item.title}</h2>
              </div>
              <div className="card--hover">
                <h2>{item.title}</h2>
                <p>
                  {item.desc}
                </p>
                <p className="link">{Data.linktext}</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>
    ))
  }

  render() {
    return (
      <span className="card-body">
        {this.cardGenerator(Data.projects)}
      </span>
    );
  }
}

export default Projects;
