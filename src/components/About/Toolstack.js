import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJenkins,
  SiDatadog,
  SiGrafana,
  SiGithub,
  SiHeroku,
  SiRedis,
  SiMongodb,
  SiInformatica,
  SiRender,
  SiCpanel,
  SiVercel
} from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import "./About.css";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiDatadog />, name: "Datadog" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiInformatica />, name: "Informatica" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiHeroku />, name: "Heroku" },
    { icon: <SiRender />, name: "Render" },
    { icon: <FaDigitalOcean />, name: "DigitalOcean" },
    { icon: <SiCpanel />, name: "Cpanel" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <div className="icon-wrapper">
            {tool.icon}
            <div className="icon-tooltip">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
