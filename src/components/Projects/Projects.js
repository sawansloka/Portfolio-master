import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import naxGame from "../../Assets/Projects/naxGame.png";
import crud from "../../Assets/Projects/crud.png";
import smartClass from "../../Assets/Projects/smartClass.png"
import commentSystem from "../../Assets/Projects/comment-system.png";
import pokedex from "../../Assets/Projects/pokdex.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartClass}
              isBlog={false}
              title="Smart-Classroom"
              description="A web portal for students and teachers for attending the virtual classroom which comes with the features of creating and joining classes, video conference, classwork, information of teachers and students and one can update their profile also."
              ghLink="https://github.com/sawansloka/Smart-Classroom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naxGame}
              isBlog={false}
              title="NaxGame"
              description="Multiplayer real-time trivia game based on Nash Equilibrium. In this game a player can achieve the desired outcome by not deviating from their initial strategy. A game may have multiple Nash equilibrium or none at all."
              ghLink="https://github.com/sawansloka/NaxGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokédex"
              description="A portal to see the characters of Pokemon and their Strength like Height, Weight, Defense, Hp, Species, Type, Attack with Id’s present in every character card pokedex is built by feching a data from Pokemon API."
              ghLink="https://github.com/sawansloka/Pokedex"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="TO-DO List"
              description="A portal to add multiple content and extract relevant information created by users. Ability to add content, read contents, update the content, delete contents."
              ghLink="https://github.com/sawansloka/CRUD-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commentSystem}
              isBlog={false}
              title="Comment System"
              description="A portal developed as a chatting option where one can comment, reply. Ability to add comments, reply to comments and search for the comments."
              ghLink="https://github.com/sawansloka/Comment-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
