import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./Experience.css";

function ExperienceCard(props) {
    let titleBackgroundClass = "";
    switch (props.title) {
        case "PhysicsWallah":
            titleBackgroundClass = "black-background";
            break;
        case "BUZZLE":
            titleBackgroundClass = "black-background";
            break;
        case "MADIEE Games":
            titleBackgroundClass = "skyblue-background";
            break;
        default:
            break;
    }

    return (
        <Card className="project-card-view">
            <div className="circle-img">
                <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            </div>
            <div className={`title-background ${titleBackgroundClass}`}>
                <Card.Title className="title-text"><h3>{props.title}</h3></Card.Title>
            </div>
            <Card.Body>
                <br />
                <br/>
                <Card.Text style={{ textAlign: "center" }}>
                    <h4 style={{ margin: "auto", textAlign: "center" }}>{props.role}</h4>
                </Card.Text>
                <Card.Text style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "auto", textAlign: "center" }}>{props.date}</h5>
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                {"\n"}
                {"\n"}

            </Card.Body>
        </Card>
    );
}
export default ExperienceCard;
