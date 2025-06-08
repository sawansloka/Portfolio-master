import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple">Sloka Sawan</span> from{" "}
            <span className="purple">Bihar, India</span>.
            <br />
            <br />
            Currently, I work as a <span className="purple">Software Engineer at Nielsen</span>, where I specialize in backend development and system integration.
            Previously, I contributed to building scalable backend systems at{" "}
            <span className="purple">PhysicsWallah</span>.
            <br />
            <br />
            I hold a{" "}
            <span className="purple">B.Tech in Industrial and Production Engineering</span> from{" "}
            <span className="purple">Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar</span>, class of 2023.
            <br />
            <br />
            I'm passionate about clean architecture, scalable systems, and solving real-world problems through code. I’ve also worked on freelance projects that enhanced my adaptability and exposure to diverse technologies.
            <br />
            <br />
            Outside of work, here are a few things I love doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            "Pain is temporary; it will come and go. What truly matters is your resilience in overcoming it. Keep fighting, and you'll emerge stronger on the other side!"
          </p>
          <footer className="blockquote-footer">Sloka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
