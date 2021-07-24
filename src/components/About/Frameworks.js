import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiScrum
} from "react-icons/di";
import { SiSpring, SiElectron, SiReact, SiSymphony, SiFlask, SiDjango, SiFlutter, SiNodeDotJs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElectron />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodeDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymphony />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
    </Row>
  );
}

export default Frameworks;
