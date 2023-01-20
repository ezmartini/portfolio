import React from "react";
import { cardClasses } from "./util";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <Card className={cardClasses.small}>
      <Card.Header className="p-0 bg-white border-bottom-0 p-2 custom-header">
        {" "}
        <Card.Title> Projects </Card.Title>
        <p className="small text-muted mb-0 mt-0">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}
