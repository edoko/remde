import React, { Component } from "react";
import { Button } from "antd";
import { saveAs } from "file-saver/FileSaver";
import "./style.css";

class Buttons extends Component {
  handleSaveFile = e => {
    let blob = new Blob([this.props.mdedata], { type: "text/plain" });
    saveAs(blob, "test.md");
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.handleSaveFile}
          className="btn_save"
        >
          Save file
        </Button>
        <Button type="danger" className="btn_share">
          Share it
        </Button>
      </div>
    );
  }
}

export default Buttons;
