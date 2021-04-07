import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <span className="card-body">
        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/Mini-Youtube" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">play_circle_filled</i>
                <h2>Mini-YouTube</h2>
              </div>
              <div className="card--hover">
                <h2>Mini-YouTube</h2>
                <p>
                    Mini-YouTube is a single page application made with JavaScript & 
                    ReactJS for easily accessing YouTube on low end devices.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/Lifestyle-Store" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">local_grocery_store</i>
                <h2>Lifestyle Store</h2>
              </div>
              <div className="card--hover">
                <h2>Lifestyle Store</h2>
                <p>
                    A complete E-Commerce store with Authentication & Authorization, 
                    Session Management, Cart Handling and more, 
                    build with HTML/CSS/Bootstrap for the front-end, 
                    PHP as the back-end and MySQL as the data store.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/LMS" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">menu_book</i>
                <h2>Library Management System</h2>
              </div>
              <div className="card--hover">
                <h2>Library Management System</h2>
                <p>
                    Desktop app for Library Management with Authentication & Authorization modules, 
                    Database integration and more, build with Java.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/LMS" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">checklist</i>
                <h2>Todo-List</h2>
              </div>
              <div className="card--hover">
                <h2>Todo-List</h2>
                <p>
                    A simple Todo-List made with Angular at it's core.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/my-portfolio" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">account_box</i>
                <h2>My Portfolio</h2>
              </div>
              <div className="card--hover">
                <h2>My Portfolio</h2>
                <p>
                    My current portfolio built using ReactJS, EmailJS and Semantic UI.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <a href="https://github.com/livesamarthgupta/Bouncy" target="_blank" rel="noopener noreferrer">
              <div className="card--display">
                <i className="material-icons">sports_basketball</i>
                <h2>Bouncy</h2>
              </div>
              <div className="card--hover">
                <h2>Bouncy</h2>
                <p>
                    Bouncy is a single page application game built with Angular at it's core.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border"></div>
          </div>
        </div>

        
      </span>
    );
  }
}

export default Projects;
