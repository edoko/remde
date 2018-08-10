import React, { Component } from "react";
import { Button } from "antd";
import { saveAs } from "file-saver/FileSaver";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./style.css";

class Buttons extends Component {
  handleSaveFile = e => {
    let blob = new Blob([this.props.mdedata], { type: "text/plain" });
    saveAs(blob, "markdown.md");
  };

  handleUpload = () => {
    this.props.saveContent(this.props.mdedata);
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
        <Button type="danger" className="btn_share" onClick={this.handleUpload}>
          Share it
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveContent: content => {
      dispatch(actions.saveContent(content));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Buttons);
