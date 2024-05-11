import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import maddieLogo from "../../Assets/Experiences/madiee_logo.png";
import pwLogo from "../../Assets/Experiences/pw_logo.png"
import buzzleLogo from "../../Assets/Experiences/buzzleLogo.png";

function Experience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Work Experience </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Experiences gained so far
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ExperienceCard
                            imgPath={pwLogo}
                            title="PhysicsWallah"
                            role="Software Developer"
                            date="June 2023 - May 2024"
                            description={
                                <>
                                    <ul>
                                        <li>Drafted the Low Level Diagram for 4 PRD and implemented the required flow, including Unit Testing</li>
                                        <li>Rectified the Juspay payment flow for over 1 million pending transactions, introducing new APIs to handle all edge cases</li>
                                        <li>Enhanced existing APIs by implementing Redis cache and improving the Time Complexity, thus reducing p90 latency from 500-600 milliseconds to 25-30 milliseconds, as observed via DataDog, Grafana</li>
                                        <li>Designed and implemented an Invoice template, streamlining purchase calculations for various package buying conditions, resulting in a 30% reduction in processing time</li>
                                        <li>Successfully integrated an SMS API, automating invitation messages to students upon session booking, including the meeting link, leading to a 50% increase in session attendance</li>
                                        <li>Pioneered new innovations, such as a Payment landing page and enhancements to Cohort changes and Batches, driving a 20% improvement in user engagement metrics</li>
                                        <li>Engineered a Snooze feature utilizing a Linked List concept, resulting in a 15% increase in plan upgrades and user retention</li>
                                        <li>Spearheaded initiatives focused on optimizing Cohorts, Batches, Payment flow, and Batch-Scheduling, resulting in a 25% enhancement in overall platform efficiency</li>
                                    </ul>
                                    <p>Technologies: NodeJS, NestJs, Apache kafka, Jest, MongoDB, Jenkins, DataDog, Grafana, ArgoCD, Redis, SQL</p>
                                </>
                            }
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ExperienceCard
                            imgPath={buzzleLogo}
                            title="BUZZLE"
                            role="Web Developer Intern"
                            date="June 2023 - August 2023"
                            description={
                                <>
                                    <ul>
                                        <li>A portal to see the characters of Pokemon and their Strength like Height, Weight, Defense, Hp, Species, Type, Attack with Id’s present in every character card pokedex is built by feching a data from Pokemon API.</li>
                                        <li>Integrated APIs and Payment Gateways for over 100 Exclusive Live Events</li>
                                        <li>Resolved Virtual Static Space issue with socket.io, boosting user engagement by 30%</li>
                                        <li>Worked on Audio interaction with 70% efficiency during live collaboration</li>
                                    </ul>
                                    <p>Technologies: NodeJS, ReactJs, MongoDB, HTML/CSS, socket.io</p>
                                </>
                            }
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ExperienceCard
                            imgPath={maddieLogo}
                            title="MADIEE Games"
                            role="Web Developer Intern"
                            date="July 2022 - August 2022"
                            description={
                                <>
                                    <ul>
                                        <li>Developed a multiplayer game inspired by the Wavelength board game, garnering 1,000+ downloads in its debut month</li>
                                        <li>Crafted an engaging guessing game with ReactCSSTransitionGroup, boosting user interaction by 30%</li>
                                        <li>Created a Points Table with basic OOPS concept, enhancing user experience and boosting player retention by 20%</li>
                                    </ul>
                                    <p>Technologies: NodeJS, ReactJs, MongoDB, HTML/CSS, socket.io, PeerJs</p>
                                </>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Experience;
