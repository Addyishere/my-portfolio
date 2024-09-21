import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Gaikwad </span>
            from <span className="purple"> Satara, India.</span>
            <br />
            I am  Frontend Developer with 8+ Months of experience in web development, specializing in HTML, CSS, JavaScript, and PHP..
            <br />
            Proficient in frameworks like React.js and Express.js, with a passion for creating user-friendly and efficient web applications.
            <br />
            Strong team player, quick learner, and always eager to keep up with the latest trends in technology.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya Gaikwad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
