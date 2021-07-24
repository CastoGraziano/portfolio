import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

//TODO => FIX DESCRIPTION

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Graziano Casto </span>
            from <span className="purple"> Bergamo, Italy.</span>
            <br />I' a junior full stack developer with experience with mobile and web development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Write code, make difference!"{" "}
          </p>
          <footer className="blockquote-footer">Graziano</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
