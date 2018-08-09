import React, { Component } from "react";
import { Layout } from "antd";
import LeftSider from "./components/LeftSider";
import "./App.css";

const { Content } = Layout;

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        <Layout>
          <LeftSider />
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{ padding: 24, background: "#fff", textAlign: "center" }}
              >
                {this.props.children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
