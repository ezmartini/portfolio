import React from "react";
import { Card } from "react-bootstrap";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { cardClasses } from "./util";

export default function About() {
  return (
    <Card className={cardClasses.large + cardClasses.right}>
      <Card.Header className="p-0 bg-white border-bottom-0 p-2 custom-header">
        {" "}
        <Card.Title>
          {" "}
          <BsFillChatLeftQuoteFill className="me-1 mb-0" /> About{" "}
        </Card.Title>
        <p className="small text-muted mb-0 mt-0">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </Card.Header>
      <Card.Body> </Card.Body>
    </Card>
  );
}
