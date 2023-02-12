import React from "react";
import { Card } from "react-bootstrap";
import Primary from "./Primary";
import Secondary from "./Secondary";
function Index(props) {
  return (
    <Card className="r-epitome">
      <Card.Body>
        <Primary />
        <Secondary />
      </Card.Body>
    </Card>
  );
}
export default Index;

