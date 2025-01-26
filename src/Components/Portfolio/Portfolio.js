import React from "react";
import "./Portfolio.css"; 

const Portfolio = () => {
  const openPortfolio = () => {
    window.open(
      "https://murali-myportfolio-60028585598.development.catalystserverless.in/app/",
      "_blank"
    );
  };

  return (
    <div className="portfolio-container">
      <h2>About Me</h2>
      <section className="intro-section">
        <p>
          Hi, I'm Murali venkatajhalapathy, a passionate developer with 3 years of
          experience specializing in Frontend Development ReactJS. I have a strong background in building scalable and responsive web applications.
        </p>
        <p>
          My journey in the tech field started with working on a project called UNIFY,in that i have been maintaing an application called Nuxeo and since then, I've focused on mastering
          the latest web development technologies like React and strong understanding in backend systems too...
        </p>
        <p>My Tech stack includes HTML, CSS, Javascript, ReactJS, Redux, MicroFrontends, Bootstrap</p>

        <p>Please check my Portfolio through the below link , as I was not able to make it visible in this same page due to CROS origin restriction from my hoisted server</p>

      </section>

      
      <button className="view-portfolio-button" onClick={openPortfolio}>

        View Full Portfolio
      </button>
    </div>
  );
};

export default Portfolio;
