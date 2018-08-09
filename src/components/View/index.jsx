import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import "./style.css";

class View extends Component {
  render() {
    console.log(this.props.states);
    if (this.props.states === true) {
      return (
        <div className="div_view">
          <ReactMarkdown className="div_view2" source={this.props.content} />
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
