import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import {
  SiRedis,
  SiApachekafka,
  SiSocketdotio,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiOracle,
  SiSencha
} from "react-icons/si";
import { GrTest } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import "./About.css";

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <BiLogoSpringBoot />, name: "Spring Boot" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <SiOracle />, name: "Oracle DB" },
    { icon: <TbSql />, name: "SQL" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <GrTest />, name: "Jest" },
    { icon: <SiApachekafka />, name: "Apache Kafka" },
    { icon: <SiSocketdotio />, name: "Socket.IO" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <SiSencha />, name: "Sencha Ext Js" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <div className="icon-wrapper">
            {tech.icon}
            <div className="icon-tooltip">{tech.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
