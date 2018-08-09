import React, { Component } from "react";
import { Layout } from "antd";
import LeftSider from "./components/LeftSider";

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <LeftSider />
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: "50px 16px", overflow: "initial" }}>
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
