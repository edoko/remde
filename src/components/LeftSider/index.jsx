import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LeftSider extends Component {
  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <Link to="/">
          <h1 className="logo">ReMDe</h1>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">About</span>
          </Menu.Item>
          <Menu.Item key="2">
            <a
              href="https://github.com/edoko/remde"
              style={{ color: "rgba(255, 255, 255, 0.65)" }}
              target="_blank"
            >
              <Icon type="github" />
              <span className="nav-text">Github</span>
            </a>
          </Menu.Item>
          <SubMenu
            key="3"
            title={
              <span>
                <Icon type="message" />
                <span>Another Services</span>
              </span>
            }
          >
            <Menu.Item key="7">@TypingInsta</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default LeftSider;
