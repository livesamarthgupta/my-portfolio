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
              <h5>Teradata</h5>
              <a target="_blank" href="https://www.teradata.com/" rel="noopener noreferrer">
                Software Engineer
              </a>
              <p className="float-right text-primary">2021 - Present</p>
              <ul className="ui bulleted list">
                <li className="item">Working in a SAFe environment for the design, development, delivery and support of Teradata Viewpoint.</li>
                <li className="item">Collaborated with the security team to make Viewpont FIPS 140-2 compliant.</li>
                <li className="item">Enabled JWT integration in DataMover service for SSO environments by implementing singletons to maintain backward compatibility.</li>
              </ul>
            </li>
            <li>
              <h5>Wipro</h5>
              <a target="_blank" href="https://www.wipro.com/en-IN/" rel="noopener noreferrer">
                Project Engineer
              </a>
              <p className="float-right text-primary">2019 - 2021</p>
              <ul className="ui bulleted list">
                <li className="item">Worked in an agile environment for the design, development, delivery and support of IBM-TRIRIGA Platform. IBM-TRIRIGA is used by Fortune-500 companies such as Google, Apple, Adobe as Integrated Workplace Management System.</li>
                <li className="item">Full-Stack Developer: Wrote and Reviewed code in Java, JavaScript (Spring/React). Also, implemented various RESTful APIs in Java/Spring that was consumed by the UI.</li>
                <li className="item">Worked with UX-Next Team to build the UX-Next Report Renderer in IBM-Tririga from scratch.</li>
                <li className="item">Implemented filter operator (”In Range”) for the back-end filter engine which reduces search queries by 50%.</li>
                <li className="item">Designed & developed a web component with features of session expiration warning & session renewal for SSO & Non-SSO environments hence reducing average session timeouts.</li>
                <li className="item">Implemented XLS export for BIRT Reports in custom workflows.</li>
                <li className="item">Was responsible for a11y for the whole application and got it to a score of 93 in the Lighthouse report.</li>
                <li className="item">Fixed various defects in the platform code to make it more stable.</li>
              </ul>
            </li>
            <li>
              <h5>AKTU</h5>
              <a href="https://www.smslucknow.com/" rel="noopener noreferrer" target="_blank">Undergraduate</a>
              <p className="float-right text-primary">2015 - 2019</p>
              <ul className="ui bulleted list">
                <li className="item">
                  Undergone Bachelor of Technology in Computer Science and
                  scored 80% in the overall result.
                </li>
              </ul>
            </li>
            <li>
              <h5>RAMPUS</h5>
              <a href="http://rampus.co.in/" rel="noopener noreferrer" target="_blank">Intermediate</a>
              <p className="float-right text-primary">2013 - 2015</p>
              <ul className="ui bulleted list">
                <li className="item">Scored 75% with PCM.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
