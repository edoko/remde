import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import { Button } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./style.css";

class View extends Component {
  render() {
    if (this.props.states === true) {
      return (
        <div className="div_view">
          <ReactMarkdown className="div_view2" source={this.props.content} />
          <CopyToClipboard
            text={`http://` + window.location.host + window.location.pathname}
          >
            <Button className="btn_copy">Copy Link</Button>
          </CopyToClipboard>
        </div>
      );
    }
    return (
      <div className="div_view">
        <ReactMarkdown className="div_view2" source={this.props.datas} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    datas: state.data.datas
  };
};

export default connect(
  mapStateToProps,
  null
)(View);
