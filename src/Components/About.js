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
                <li className="item">
                  Presently working in an agile environment for the design,
                  development, delivery and support of IBM-Tririga Platform,
                  working as a Full-stack developer in a team of 5 members who
                  are responsible for the modernization of older JSP based
                  report renderer into ReactJS components with redux state
                  management making the report rendering faster and consistent.
                </li>
                <li className="item">
                  Also, improved the IBM-Tririga Platform by implementing
                  various enhancements and resolving various defects by
                  troubleshooting and finding the root cause of the issue in the
                  backend code that uses Java and Spring framework.
                </li>
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
