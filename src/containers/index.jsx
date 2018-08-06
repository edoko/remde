import React from "react";
import { Container, Row, Col } from "reactstrap";
import Editor from "../components/Editor";
import View from "../components/View";

const Containers = () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Editor />
        </Col>
        <Col xs={6}>
          <View />
        </Col>
      </Row>
    </Container>
  );
};

export default Containers;
