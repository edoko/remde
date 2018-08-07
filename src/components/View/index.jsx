import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";
import "./style.css";

class View extends Component {
  render() {
    return (
      <div className="div_view">
        <div
          className="div_view2"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.datas, { sanitize: true })
          }}
        />
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
