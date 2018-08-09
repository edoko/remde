import React, { Component } from "react";
import { Row, Col } from "antd";
import Editor from "../Editor";
import View from "../View";

class Create extends Component {
  render() {
    return (
      <Row>
        <Col span={12}>
          <Editor />
        </Col>
        <Col span={12}>
          <View />
        </Col>
      </Row>
    );
  }
}

export default Create;
