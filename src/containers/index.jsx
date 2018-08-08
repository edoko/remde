import React from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import Editor from "../components/Editor";
import View from "../components/View";
import LeftSider from "../components/LeftSider";
import "./style.css";

const { Header, Content } = Layout;

const Containers = () => {
  return (
    <Layout>
      <LeftSider />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
            <Row>
              <Col span={12}>
                <Editor />
              </Col>
              <Col span={12}>
                <View />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Containers;
