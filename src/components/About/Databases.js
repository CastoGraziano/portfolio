import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiSqllite
} from "react-icons/di";
import { SiPostgresql, SiMysql } from "react-icons/si";

function Databases() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
      </Col>
    </Row>
  );
}

export default Databases;
