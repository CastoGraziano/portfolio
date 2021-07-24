import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Databases from "./Databases";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about-mobile.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming <strong className="purple">Languages </strong>
        </h1>

        <ProgrammingLanguages />

        <h1 className="project-heading">
          <strong className="purple">Frameworks </strong>
        </h1>

        <Frameworks />

        <h1 className="project-heading">
          <strong className="purple">Databases </strong>
        </h1>

        <Databases />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
