import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>My Timeline</h4>
          <ul className="timeline">
            <li>
              <a target="_blank" href="https://www.wipro.com/en-IN/">
                Project Engineer
              </a>
              <p className="float-right text-primary">2019 - Present</p>
              <ul className="ui bulleted list">
                <li className="item">Presently working in an agile environment for the design, development, delivery and support of IBM-TRIRIGA Platform.</li>
                <li className="item">IBM-TRIRIGA is used by Fortune-500 companies such as Google, Apple, Adobe and more as Integrated Workplace Management System.</li>
                <li className="item">Full-Stack Developer - Wrote and reviewed code for JS using React/Redux. Also, implemented various Rest APIs in Java/Spring that was consumed by UI.</li>
                <li className="item">Worked with Report Renderer Team, in React/Redux to rebuild the Report Renderer from older JSP based engine to UX-Next Renderer.</li>
                <li className="item">Was responsible for a11y for the whole application and got it to a score of 93 in the Lighthouse report.</li>
                <li className="item">Fixed various defects in the platform code to make it more stable.</li>
              </ul>
            </li>
            <li>
              <a href="https://www.smslucknow.com/">Undergraduate</a>
              <p className="float-right text-primary">2015 - 2019</p>
              <ul className="ui bulleted list">
                <li className="item">
                  Undergone Bachelor of Technology in Computer Science and
                  scored 80% in the overall result.
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Intermediate</a>
              <p className="float-right text-primary">2013 - 2015</p>
              <ul className="ui bulleted list">
                <li className="item">Scored 75% with PCM.</li>
              </ul>
            </li>
            <li>
              <a href="#">Since Birth</a>
              <p className="float-right text-primary">Birth - 2013</p>
              <ul className="ui bulleted list">
                <li className="item">Learned too much :-)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
