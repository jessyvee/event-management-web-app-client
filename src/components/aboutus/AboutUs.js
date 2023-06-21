import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const About = () => {
  return (
    <>
      <div id="aboutus" className="about-container">
        <div id="about-mission">
          <h3>About Us</h3>
          <p>
            Partyzone is an application that allows users to view and subscribe
            to upcoming events, and for event organizers to list events and get
            insights into attendees.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower users to easily find and access future
            events based on their interests, and help event organizers reach a
            wider audience for the events they will be hosting.
          </p>
        </div>
        <h3 className="team-title">Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            {/* <img src="https://www.recapo.com/wp-content/uploads/2013/05/steve-harvey1.jpg" alt="CEO" id="ceo" /> */}
            <h4>Alvin</h4>
            <p>CEO</p>
            <p>
              Alvin has over 7 years of experience in the tech industry,
              specializing in search engine optimization and user experience
              design.
            </p>
          </div>

          <div className="team-member">
            {/* <img src="https://img.bleacherreport.net/img/images/photos/001/956/417/hi-res-6677328_crop_exact.jpg?w=1200&h=1200&q=75" alt="Team member 2" /> */}
            <h4>Joshua</h4>
            <p>Lead Developer</p>
            <p>
              Joshua is an experienced full-stack developer with expertise in
              React, Node.js, and MongoDB.
            </p>
          </div>

          <div className="team-member">
            {/* <img src="http://a.espncdn.com/photo/2014/1216/nba_g_kdurts_600x600.jpg" alt="Team member 2" /> */}
            <h4>Jesse</h4>
            <p>Software Developer</p>
            <p>
              Jesse is a developer with a superpower in creating wireframes and
              prototypes to showcase the future.
            </p>
          </div>

          <div className="team-member">
            {/* <img src="https://i.pinimg.com/originals/96/b9/b0/96b9b075894201bb6ed9efe8c2b4902f.jpg" alt="Team member 2" /> */}
            <h4>Caren</h4>
            <p>UI/UX Designer</p>
            <p>
              Caren is a highly skilled user interface and user experience
              engineer.
            </p>
          </div>
        </div>
        <h3 className="contact-title">Contact Us</h3>
        <p className="contact-text">
          If you have any questions or feedback, please don't hesitate to reach
          out to us via the <Link to="/contact">Contact form</Link>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
