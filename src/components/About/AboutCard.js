import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sloka Sawan </span>
            from <span className="purple"> Bihar, India</span>
            <br />
            I am currently employed as a software developer at PhysicsWallah
            <br />
            I have completed <span className="purple">Bachelor of Technology (B.Tech)</span> in
            <br /><span className="purple">Industrial and Production Engineering</span> at
            <br /><span className="purple">Dr. B. R. Ambedkar National Institute of Technology, Jalandhar</span>
            <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym Hitting
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Pain is temporary; it will come and go. What truly matters is your resilience in overcoming it. Keep fighting, and you'll emerge stronger on the other side!"{" "}
          </p>
          <footer className="blockquote-footer">Sloka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
