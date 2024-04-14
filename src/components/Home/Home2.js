import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Images/myProfilePic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A passionate problem-solver and technology enthusiast
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Javascript, Typescript </b>
              </i>
              <br />
              <br />
              I'm passionate about developing innovative 
              <i>
                <b className="purple"> Web Technologies</b>{" "}
              </i> {" "}
              with a keen interest in solving problem statement{" "}
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              
              <br />
              <br />
              As a Backend Developer at  <i><b className="purple">
                PhysicsWallah</b></i> , I specialize in Tech Stack :
              <i>
                <b className="purple"> Javascript</b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  TypeScript
                </b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  MongoDB
                </b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  Redis</b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  SQL</b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  Apache Kafka</b>
              </i>
              &nbsp; ,
              <i>
                <b className="purple">
                  {" "}
                  Jest</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple">
                  {" "}
                  Microservices</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sawansloka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/SawanSloka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sawansloka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
